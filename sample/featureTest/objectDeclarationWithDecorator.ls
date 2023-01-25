
Policy : {
  isSigned: boolean @ask="Is the policy signed" @displayName="Policy signed" @documentation="A boolean to represent if the policy is payed",
  isPremiumPayed: boolean @ask="Is the policy premium payed" @displayName="Premium payed" @documentation="A boolean to represent if a policy is payed",
  isCanceled: boolean @ask="Is the policy canceled" @displayName="Policy canceled" @documentation="A boolean to represent if a policy is cancelled"
} @documentation="An object that represent a policy";