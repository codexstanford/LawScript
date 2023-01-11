@Section1.PartII {
    ::Text {
      value : "## Part II - Curtailment"
    }

    ::Text {
      value: "We will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
    }


    ::Payout {
      type: "Limit",
      amount: InsuredSum,
      unit: "USD",
      for : {
        cost: "irrecoverable cost",
        relation: [
          {
            type: Relation.UnavoidablyIncurredBy,
            target: PolicyHolder
          }
        ]
      }
    }
    (
    CurtailmentSuddenDeath()
    ||
    CurtailmentVenueUnableContinueToHold()
    ||
    CurtailmentDueToMarquee()
    -->
    Situation {
      event: Event.Curtailment,
      relation: {
        type: Relation.HappenTo,
        target: Wedding || WeddingReception
      }
    }
    -->
    Situation {
      event: Event.IrrecoverableCosts,
      relation: {
        type: Relation.IncurredBy,
        target: PolicyHolder
      }
    }
    )
    && (
      ::Text {
      value: "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
      } 
      ( 
      Situation {
        event: Event.IntentionToReplan,
        relation: [
          {
            type: Relation.HappenTo,
            target: Wedding || WeddingReception
          },
          {
            type: Relation.By,
            target: PolicyHolder
          }
        ]
      }
    )
    || (
        Situation {

          event: Event.Death,
          relation:  {
            type: Relation.HappenTo,
            target: PolicyHolder
          }

        }) 
    );
      

    

      Rule CurtailmentSuddenDeath() {
        ::Text {
          value: "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
        }  

        Situation {
          event: Event.Death || Event.Injury || Event.SeriousSickness,
          relation: [
            {
              type: Relation.HappenTo,
              target: PolicyHolder || "couple close relative"
            },
            {
              type: Relation.HappenAt,
              target: Wedding || WeddingReception
            }
          ]
        };
      }

      Rule CurtailmentVenueUnableContinueToHold() {
        ::Text {
          value: "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
        }

        (
          Situation {
            event: Event.NaturalCatastrophe || Event.AdverseWeather
          } 
          -->
          Situation {
            event: Event.Damage,
            relation: {
            type: Relation.HappenTo,
            target: Venue
            }
          }
        )
        ||
        (
          Situation {
            event: Event.Fire || Event.Death || Event.Suicide || Event.Fire,
            relation: {
              type: Relation.HappenAt,
              target: Venue
            }
          } 
          -->
          Situation {
            event: Event.Evacuation
          }
        )
        ||
        Situation {
          event: Event.ActOfTerrorism,
          relation: {
            type: Relation.HappenAt,
            target: Venue
          }
        } 
      ||
        Situation {
          event: Event.Closure,
          relation: [
            {
            type: Relation.HappenTo,
            target: Venue
          }, {
            type: Relation.CausedBy,
            target: "Relevant authority"
          }
          ]
        }   
        -->
        Situation {
          event: Event.UnableToHoldGathering,
          relation: [
            {
              type: Relation.HappenTo,
              target: Wedding || WeddingReception
            },
            {
              type: Relation.HappenAt,
              target: Venue
            }
          ]
        };
      }


      Rule CurtailmentDueToMarquee() {

        ::Text {
          value: "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
        }

        Situation {
          event: Event.Loss || Event.Theft || Event.SevereDamage,
          relation : {
            type: Relation.HappenTo,
            target: InsuredMarquee
          },
          endorsement: "MarqueeCover"
        };
      }
  }
