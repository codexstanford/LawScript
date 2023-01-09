
    ::Text {
      value: "We will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
    }

  ::Payout {
    type: "Limit",
    amount: InsuredSum,
    unit: "USD",
    for : {
      cost: "irrecoverable expenses",
      relation: [
        {
          type: Relation.IncurredBy,
          target: PolicyHolder
        },
        {
          type: Relation.IncurredTo,
          target: WeddingSupplier
        },
        {
          type: Relation.PrescribedBy,
          target: "contract" || "agreement"
        }
      ]

    }
  }
   (
      Situation {
        a : "b"
      }
      || 
      Situation {
        a : "c"
      }
   )
   -->
   Situation {
     a: "D"
   };