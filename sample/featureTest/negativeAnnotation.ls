 ::!Payout {
  type: "Limit",
  for : {
    cost: "A",
    relation: [
      {
        type: Relation.IncurredBy,
        target: PolicyHolder
      },
      {
        type: Relation.IncurredTo,
        target: WeddingSupplier
      }
    ]
  }
}

 ::Payout {
  type: "Positive"
}