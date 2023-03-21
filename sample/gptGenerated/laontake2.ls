dictionary Event {
RequestLoan: {
displayName: "Request Loan"
},
AdvanceFunds: {
displayName: "Advance Funds"
},
Repayment: {
displayName: "Repayment"
},
Default: {
displayName: "Default"
},
Prepayment: {
displayName: "Prepayment"
},
LateFee: {
displayName: "Late Fee"
},
Termination: {
displayName: "Termination"
},
Acceleration: {
displayName: "Acceleration"
}
};

Situation: {
event: any,
date: any,
relatedTo: any,
loanAmount: any
};

Amount: {
value: number,
unit: string
};

Loan: {
principal: Amount,
interestRate: number,
paymentStructure: any,
startDate: date,
maturityDate: date,
lender: any,
borrower: any
};

Person: {
name: string
};

Lender: Person;
Borrower: Person;

section Agreement {
annotation Text {
value: "Agreement\nThis loan agreement dated June 1, 2014, by and between Lender Bank Co. (“Lender”) and\nBorrower Corp. (Borrower), will set out the terms under which Lender will extend credit in the\nprincipal amount of $1,000 to Borrower with an un-compounded interest rate of 5% per annum,\nincluded in the specified payment structure."
}
Loan {
principal: { value: 1000, unit: "USD" },
interestRate: 5,
startDate: "2014-06-01",
lender: Lender,
borrower: Borrower
};
}
section Part1 {
annotation Text {
value: "1. The Loan:\nAt the request of Borrower, to be given on June 1, 2014, Lender will advance $1000 to Borrower\nno later than June 2, 2014. If Borrower does not make such a request,"
}
Situation {
event: Event.RequestLoan,
date: "2014-06-01",
relatedTo: Loan
}
-->
Situation {
event: Event.AdvanceFunds,
date: "2014-06-02",
loanAmount: { value: 1000, unit: "USD" },
relatedTo: Loan
};
}
section Part2 {
// Additional sections (Part 2, Part 3, etc.) should be added here to cover the remaining clauses
// of the loan agreement.
}



