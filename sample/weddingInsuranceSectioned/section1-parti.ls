@Section1.PartI {
    ::Text {
      value: " ## Part I - Cancellation" 
    }
  
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
      CancellationDueToVenue()
      || CancellationDueToDeathOrInjury()
      || CancellationDueToSupplier()
      || CancellationDueToRedundancy()
      || CancellationDueToOverseaPublicService()
      || CancellationDueToNonApparenceOfMinister()
      || CancellationDueToCatNat()
      || CancellationDueToMarquee()
      -->
      Situation {
        event: Event.UnavoidableCancellation,
        relation: [{
          type: Relation.HappenTo,
          target: Wedding || WeddingReception
        },
        {
          type: Relation.CausedBy,
          target: PolicyHolder
        }]
      }
      ) &&
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
        } ||

        Situation {
          event: Event.Death,
          relation:  {
              type: Relation.HappenTo,
              target: PolicyHolder
            }
        }
      )
      ::Text {
        value: "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
      };


    Rule CancellationDueToVenue() {
      ::Text {
        value: " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
      }

      Situation {
        event: Event.FinancialFailure || Event.Bankruptcy || 
        Event.Liquidation || Event.Administration,
        relation: {
          type: Relation.HappenTo,
          target: BookedVenue
        }
      } ::Text { value: "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"}
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
        } 
      )
      ::Text {value: "b) damage to the venue caused by fire, natural catastrophe or adverse weather"}

      ||

      Situation {
        event: Event.Murder||Event.Death|| Event.Suicide,
        relation: {
          type: Relation.HappenAt,
          target: BookedVenue
        }
      } 
      ::Text {value: "c) murder, death or suicide at the venue"}

      ||

      Situation {
        event: Event.ActOfTerrorism,
        relation: {
          type: Relation.HappenAt,
          target: BookedVenue
        }
      } 
        ::Text {value: "d) an act of terrorism at the venue"}


      || 
        Situation {
        event: Event.Closure,
        relation: [{
          type: Relation.HappenTo,
          target: BookedVenue
        }, {
          type: Relation.CausedBy,
          target: "relevant authority"
        }]
      } 

      ::Text {value: "  e) closure by a relevant authority;"}
    
      -->
      Situation {
        event: Event.UnableToHoldGathering,
        relation: [{
          type: Relation.By,
          target: BookedVenue
        },
        {
          type: Relation.HappenTo,
          target: Wedding || WeddingReception
        }]
      };
    }


    Rule CancellationDueToDeathOrInjury(){

      ::Text {
        value: "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
      }
      Situation {
        event: Event.Death ||  Event.Injury || Event.Sickness,
        relation: {
          type: Relation.HappenTo,
          target: Spouse1 || Spouse2
        }
      }
      -->
      Situation {
        event: Event.InappropriateCircumstance,
        relation: {
          type: Relation.HappenTo,
          target: Wedding || WeddingReception
        }
      };

    }


    Rule CancellationDueToSupplier() {
      ::Text{
        value : "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
      }

      Situation {
        event: Event.NoShow,
        relation: {
          type: Relation.CausedBy,
          target: "booked and paid for professional Wedding Services Supplier"
        }
      } 
      -->
      Situation {
        event: Event.ImpossibleContinuationOfEvent || Event.ImpossibleHappeningOfEvent,
        relation: {
          type:  Relation.HappenTo,
          target: Wedding || WeddingReception
        }
      };
    }


    Rule CancellationDueToRedundancy() {

      ::Text {
        value: "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
      }
      Situation {
        event: Event.PolicyPurchase
      }
      -->
      Time {
        value: 16,
        unit: "Week"
      }
      -->
      Situation {
        event: Event.NotificationOfLossOfJob,
          relation: {
            type: Relation.HappenTo,
            target: PolicyHolder 
            /*|| {
              "who have or would have made proven, significant, financial contributions on which the wedding arrangements depend"
            }*/
          }
      }; 

    }

    Rule CancellationDueToOverseaPublicService() {
      ::Text {
        value: "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
      }
      // Should one of the couple be Policyholder
      Situation {
        event: "mobilized",
        relation: {
          type: Relation.HappenTo,
          target: Spouse1 || Spouse2 || "couple close relative"
        }
      }; 

    }


    Rule CancellationDueToNonApparenceOfMinister() {
      ::Text {
        value : "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
      }
      Situation {
        event: Event.NoShow,
        relation: {
          type: Relation.CausedBy,
          target: "intended officiating minister or registrar"
        }
      };
    }


    Rule CancellationDueToCatNat() {

      ::Text {
        value: "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
      }

      Situation {
        event: Event.AdverseWeather || Event.NaturalCatastrophe
      }
      -->
      Situation {
        event: Event.InabilityToReachPlace,
        relation: [{
          type: Relation.HappenTo,
          target: PolicyHolder || "more than 50% of Wedding.guests.count"
        },{
          type: Relation.HappenAt,
          target: BookedVenue
        }
        ]
      };
    }

    Rule CancellationDueToMarquee() {

      ::Text {
        value: "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
      }
      Situation {
        event: Event.Loss || Event.Theft,
        relation: {
          type: Relation.HappenTo,
          target: InsuredMarquee
        },
        endorsement: "MarqueeCover"
      };
    }
  }