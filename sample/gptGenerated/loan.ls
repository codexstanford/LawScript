dictionary EventType {
RequestLoan: {
displayName: "Request Loan"
},
LoanAdvance: {
displayName: "Loan Advance"
},
Payment: {
displayName: "Payment"
},
Interest: {
displayName: "Interest"
},
Principal: {
displayName: "Principal"
}
};

Date: {
day: number,
month: number,
year: number
};

Amount: {
value: number,
currency: string
};

Bank: {
name: string
};

Corporation: {
name: string
};

Loan: {
principal: Amount,
interestRate: number,
startDate: Date,
endDate: Date,
lender: Bank,
borrower: Corporation
};

section Agreement {
annotation Text {
value: "Agreement
This loan agreement dated June 1, 2014, by and between Lender Bank Co. (“Lender”) and
Borrower Corp. (Borrower), will set out the terms under which Lender will extend credit in the
principal amount of $1,000 to Borrower with an un-compounded interest rate of 5% per annum,
included in the specified payment structure."
}
Loan {
principal: {
value: 1000,
currency: "USD"
},
interestRate: 5,
startDate: {
day: 1,
month: 6,
year: 2014
},
lender: Bank {
name: "Lender Bank Co."
},
borrower: Corporation {
name: "Borrower Corp."
}
};
}
section Part1 {
annotation Text {
value: "1. The Loan:
At the request of Borrower, to be given on June 1, 2014, Lender will advance $1000 to Borrower
no later than June 2, 2014."
}
Situation {
event: EventType.RequestLoan,
happenTo: Loan.borrower,
relatedTo: Loan
}
before
Date {
day: 1,
month: 6,
year: 2014
};
Situation {
event: EventType.LoanAdvance,
happenTo: Loan.borrower,
relatedTo: Loan
}
before
Date {
day: 2,
month: 6,
year: 2014
};
}
section Part1_continued {
annotation Text {
value: "If Borrower does not make such request on June 1, 2014, Lender shall not be obligated to
advance any funds to Borrower."
}
annotation NotObligatedToAdvanceFunds {}
Situation {
event: !EventType.RequestLoan,
happenTo: Loan.borrower,
relatedTo: Loan
}
on
Date {
day: 1,
month: 6,
year: 2014
};
}