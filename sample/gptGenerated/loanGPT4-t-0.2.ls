dictionary Event {
  RequestAdvance: {
    displayName: "Request for advance"
  },
  Repayment: {
    displayName: "Repayment"
  },
  Default: {
    displayName: "Default"
  },
  Bankruptcy: {
    displayName: "Bankruptcy"
  },
  Insolvency: {
    displayName: "Insolvency"
  },
  Payment: {
    displayName: "Payment"
  },
  TaxPayment: {
    displayName: "Tax payment"
  },
  Notice: {
    displayName: "Notice"
  }
};

Loan: {
  principalAmount: number,
  interestRate: number,
  startDate: date,
  endDate: date,
  paymentSchedule: any
};

Party: {
  name: string,
  email: string
};

RepaymentSchedule: {
  payment1: {
    dueDate: date,
    amount: number
  },
  payment2: {
    dueDate: date,
    amount: number
  }
};

Agreement: {
  date: date,
  lender: Party,
  borrower: Party,
  loan: Loan,
  repaymentSchedule: RepaymentSchedule,
  choiceOfLaw: string,
  courtJurisdiction: string
};

section Agreement {
  annotation Text {
    value: "This loan agreement dated June 1, 2014, by and between Lender Bank Co. (“Lender”) and
Borrower Corp. (Borrower), will set out the terms under which Lender will extend credit in the
principal amount of $1,000 to Borrower with an un-compounded interest rate of 5% per annum,
included in the specified payment structure."
  }
  Agreement.date = "2014-06-01";
  Agreement.lender = { name: "Lender Bank Co." };
  Agreement.borrower = { name: "Borrower Corp." };
  Agreement.loan = {
    principalAmount: 1000,
    interestRate: 0.05,
    startDate: "2014-06-01"
  };
}

section Part1 {
  annotation Text {
    value: "1. The Loan:
At the request of Borrower, to be given on June 1, 2014, Lender will advance $1000 to Borrower
no later than June 2, 2014. If Borrower does not make such a request, this agreement will
terminate."
  }
  Situation {
    event: Event.RequestAdvance,
    date: "2014-06-01"
  };
  Loan.startDate = "2014-06-01";
  Loan.endDate = "2014-06-02";
}

section Part2 {
  annotation Text {
    value: "2. Repayment:
Subject to the other terms of this agreement, Borrower will repay the loan in the following
payments:
(a) Payment 1, due June 1, 2015, in the amount of $550, representing a payment of $500 as
half of the principal and interest in the amount of $50.
(b) Payment 2, due June 1, 2016, in the amount of $525, representing a payment of $500 as
the remaining half of the principal and interest in the amount of $25."
  }
  Agreement.repaymentSchedule = {
    payment1: {
      dueDate: "2015-06-01",
      amount: 550
    },
    payment2: {
      dueDate: "2016-06-01",
      amount: 525
    }
  };
}

section Part3 {
  annotation Text {
    value: "3. Representations and Warranties:
The Borrower represents and warrants, at the execution of this agreement, at the request for the
advance of funds and at all times any repayment amount shall be outstanding, the Borrower’s
assets shall exceed its liabilities as determined under an application of the FASB rules of
accounting."
  }
  // Borrower.assets > Borrower.liabilities;
}

section Part4 {
  annotation Text {
    value: "4. Covenants:
The Borrower covenants that at the execution of this agreement, at the request for the advance
of funds and at all times any repayment amount shall be outstanding it will make timely payment
of all state and federal taxes as and when due."
  }
  Situation {
    event: Event.TaxPayment,
    happenTo: Agreement.borrower
  }
  before Time {
    date: RepaymentSchedule.payment1.dueDate || RepaymentSchedule.payment2.dueDate
  };
}

section Part5 {
  annotation Text {
    value: "5. Events of Default:
The Borrower will be in default under this agreement upon the occurrence of any of the
following events or conditions, provided they shall remain uncured within a period of two days
after notice is given to Borrower by Lender of their occurrence (such an uncured event an “Event
of Default”):"
  }
  annotation Default {
    event: Event.Default,
    uncuredPeriod: 2 * Time.day
  }
  Situation {
    event: Event.Payment,
    happenTo: Agreement.borrower
  } annotation Text {
    value: "(a) Borrower shall fail to make timely payment of any amount due to Lender hereunder;"
  }
  ||
  Situation {
    event: Event.Representation || Event.Warranty,
    happenTo: Agreement.borrower
  } annotation Text {
    value: "(b) Any of the representation or warranties of Borrower under this agreement shall prove
untrue;"
  }
  ||
  Situation {
    event: Event.Covenant,
    happenTo: Agreement.borrower
  } annotation Text {
    value: "(c) Borrower shall fail to perform any of its covenants under this agreement;"
  }
  ||
  Situation {
    event: Event.Bankruptcy || Event.Insolvency,
    happenTo: Agreement.borrower
  } annotation Text {
    value: "(d) Borrower shall file for bankruptcy or insolvency under any applicable federal or state law."
  };
}

section Part6 {
  annotation Text {
    value: "6. Acceleration on Default
Upon the occurrence of an Event of Default all outstanding payments under this agreement will
become immediately due and payable, including both principal and interest amounts, without
further notice, presentment, or demand to the Borrower."
  }
  annotation Acceleration {
    event: Event.Default
  }
  //Loan.paymentSchedule.payment1.amount + Loan.paymentSchedule.payment2.amount;
}

section Part7 {
  annotation Text {
    value: "7. Choice of Law:
This agreement will be subject to the laws of the State of New York applicable to contracts
entered into and performed wholly within that state."
  }
  Agreement.choiceOfLaw = "New York";
}

section Part8 {
  annotation Text {
    value: "8. Amendments and Waivers:
Any purported amendment to, or waiver of rights under, this agreement will only be effective if
set forth in writing and executed by both parties."
  }
}

section Part9 {
  annotation Text {
    value: "9. Courts and Litigation:
Any legal action brought to enforce, interpret or otherwise deal with this agreement must be
brought in the state courts of the State of New York located in New York County, and each of the
parties agrees to the jurisdiction of such courts over both the parties themselves and over the
subject matter of such a proceeding, and waives any claim that such a court may be an
inconvenient forum."
  }
  Agreement.courtJurisdiction = "New York County, State of New York";
}

section Part10 {
  annotation Text {
    value: "10. Time of the Essence; No Pre-Payment
Timely performance is required for any action to be taken under this agreement, and, except as
may otherwise be specifically provided herein, failure to take such action on the day specified
will constitute a binding failure to take such action. Payments shall only be made on or after the
dates specified in Section 2 or on or after such other date as may be required under Section 6;
pre-payments made on earlier dates shall not be accepted."
  }
}

section Part11 {
  annotation Text {
    value: "11. Notices
Notices provided for in this agreement will be given by an email to the email addresses set out
below and will be effective upon receipt.
[Lender email here]
[Borrower email here]"
  }
  Agreement.lender.email = "[Lender email here]";
  Agreement.borrower.email = "[Borrower email here]";
}