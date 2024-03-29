@Section1.PartIII {
  ::Text {
    value: "## Part III - Rearrangement"
  }

    ::Text {
      value: "In the event of a covered event in Part I or II above, we will reimburse you for reasonable and necessary additional  costs incurred in rearranging the wedding and/or wedding  reception to the same standard as originally booked and budgeted to up to a maximum of 10% of the sum insured."
    }

    ::Payout {
      type: "Limit",
      amount: 10 %of InsuredSum,
      unit: "USD",
      for : {
        cost: "reasonable and necessary additional costs",
        relation: [
          {
            type: Relation.IncurredBy,
            target: PolicyHolder
          },
          {
            type: Relation.IncurredFor,
            target: Event.Rearrangement 
          },
          {
            type: Relation.HappenTo,
            target: Wedding || WeddingReception
          }
        ]

      }
    }

    Section1.PartI() || Section1.PartII() ;

}
