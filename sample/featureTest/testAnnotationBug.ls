

  Situation {
    event: Event.Fire || Event.NaturalCatastrophe || Event.AdverseWeather
  }
  ||
  (
    Situation {
      event: Event.Fire || Event.NaturalCatastrophe || Event.AdverseWeather
    }
    -->
    Situation {
      event:Event.Damage,
      relation: {
        type: Relation.HappenTo,
        target: BookedVenue
      }
    } ::Probability{p: 0.0001}
  )
  ::Text {value: "b) damage to the venue caused by fire, natural catastrophe or adverse weather"}
  ;