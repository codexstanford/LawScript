section MissedDeparture {
annotation Text {
value: "What is insured?

In case of a missed departure, we provide you with:"
}

Situation {
event: Event.MissedDeparture
}
-->
Situation {
event: Event.LiaiseWithCarrier
} annotation Text { value: "- Liaise with carrier" }
&&
Situation {
event: Event.ArrangeEmergencyLocalHelp
} annotation Text { value: "- Arranging Emergency local help" }
&&
Situation {
event: Event.ArrangeAlternativeTransport
} annotation Text { value: "- Arranging alternative transport" }
&&
Situation {
event: Event.ArrangeAccommodation,
maxAmount: Amount {
// value: PolicyHolderCount < 5 ? 100 : 50,
unit: Monetary.USD
},
maxPersonCount: 5  Personn.child
} annotation Text { value: "- Accommodations with a maximum amount of $100 per person if less than 5 persons are included in the policy or $50 if more than 5 persons are included in the policy." };
}