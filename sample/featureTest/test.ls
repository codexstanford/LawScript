

@Test {

  ::Text {
    value: "If the see were to reced more than 20m, an agent should ring the alarm"
  }

  Situation {
    event: "Sea Receding",
    recedeDistanceInM: [20 ...]
  } ::Should {
    action: "Ring",
    actionTarget: "Alarm",
    actor: "Agent"
  };


}