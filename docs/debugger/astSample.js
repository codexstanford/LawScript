const SAMPLE = {
  "declarations": {
    "Event": {
      "type": "enum",
      "properties": {
        "UnavoidableCancellation": {
          "displayName": {
            "type": "string",
            "value": "Unavoidable cancellation"
          }
        },
        "IntentionToReplan": {
          "displayName": {
            "type": "string",
            "value": "Clear intention to replan"
          }
        },
        "Closure": {
          "displayName": {
            "type": "string",
            "value": "Closure"
          }
        },
        "ActOfTerrorism": {
          "displayName": {
            "type": "string",
            "value": "Act of terrorism"
          }
        },
        "Murder": {
          "displayName": {
            "type": "string",
            "value": "Murder"
          }
        },
        "Death": {
          "displayName": {
            "type": "string",
            "value": "Death"
          }
        },
        "Injury": {
          "displayName": {
            "type": "string",
            "value": "Injury"
          }
        },
        "Sickness": {
          "displayName": {
            "type": "string",
            "value": "Sickness"
          }
        },
        "SeriousSickness": {
          "displayName": {
            "type": "string",
            "value": "Serious Sickness"
          }
        },
        "Suicide": {
          "displayName": {
            "type": "string",
            "value": "Suicide"
          }
        },
        "Fire": {
          "displayName": {
            "type": "string",
            "value": "Fire"
          }
        },
        "NaturalCatastrophe": {
          "displayName": {
            "type": "string",
            "value": "natural catastrophe"
          }
        },
        "AdverseWeather": {
          "displayName": {
            "type": "string",
            "value": "adverse weather"
          }
        },
        "SevereDamage": {
          "displayName": {
            "type": "string",
            "value": "Sever Damage"
          }
        },
        "Damage": {
          "displayName": {
            "type": "string",
            "value": "Damage"
          }
        },
        "FinancialFailure": {
          "displayName": {
            "type": "string",
            "value": "financial failure"
          }
        },
        "Bankruptcy": {
          "displayName": {
            "type": "string",
            "value": "bankruptcy"
          }
        },
        "Liquidation": {
          "displayName": {
            "type": "string",
            "value": "liquidation"
          }
        },
        "Administration": {
          "displayName": {
            "type": "string",
            "value": "administration"
          }
        },
        "UnableToHoldGathering": {
          "displayName": {
            "type": "string",
            "value": "unable to hold gathering"
          }
        },
        "InappropriateCircumstance": {
          "displayName": {
            "type": "string",
            "value": "Inappropriate Circumstance"
          }
        },
        "NoShow": {
          "displayName": {
            "type": "string",
            "value": "No show"
          }
        },
        "ImpossibleContinuationOfEvent": {
          "displayName": {
            "type": "string",
            "value": "Impossible Continuation of Event"
          }
        },
        "ImpossibleHappeningOfEvent": {
          "displayName": {
            "type": "string",
            "value": "Impossible Happening of Event"
          }
        },
        "PolicyPurchase": {
          "displayName": {
            "type": "string",
            "value": "Policy Purchase"
          }
        },
        "NotificationOfLossOfJob": {
          "displayName": {
            "type": "string",
            "value": "Notification of loss of job"
          }
        },
        "Loss": {
          "displayName": {
            "type": "string",
            "value": "Loss"
          }
        },
        "Theft": {
          "displayName": {
            "type": "string",
            "value": "Theft"
          }
        },
        "InabilityToReachPlace": {
          "displayName": {
            "type": "string",
            "value": "Inability to reach a place"
          }
        },
        "Curtailment": {
          "displayName": {
            "type": "string",
            "value": "Curtailment"
          }
        },
        "Evacuation": {
          "displayName": {
            "type": "string",
            "value": "Evacuation"
          }
        },
        "IrrecoverableCosts": {
          "displayName": {
            "type": "string",
            "value": "IrrecoverableCosts"
          }
        },
        "Rearrangement": {
          "displayName": {
            "type": "string",
            "value": "Rearrangement"
          }
        },
        "LossRecoverableFromOtherSource": {
          "displayName": {
            "type": "string",
            "value": "Loss Recoverable From Other Source"
          }
        }
      }
    },
    "Relation": {
      "type": "enum",
      "properties": {
        "HappenTo": {
          "displayName": {
            "type": "string",
            "value": "Happened to"
          }
        },
        "HappenAt": {
          "displayName": {
            "type": "string",
            "value": "Happened At"
          }
        },
        "CausedBy": {
          "displayName": {
            "type": "string",
            "value": "Caused by"
          }
        },
        "By": {
          "displayName": {
            "type": "string",
            "value": "By"
          }
        },
        "IncurredBy": {
          "displayName": {
            "type": "string",
            "value": "Incurred By"
          }
        },
        "IncurredTo": {
          "displayName": {
            "type": "string",
            "value": "Incurred To"
          }
        },
        "IncurredFor": {
          "displayName": {
            "type": "string",
            "value": "Incurred For"
          }
        },
        "UnavoidablyIncurredBy": {
          "displayName": {
            "type": "string",
            "value": "Unavoidably Incurred By"
          }
        },
        "PrescribedBy": {
          "displayName": {
            "type": "string",
            "value": "Prescribed By"
          }
        }
      }
    },
    "Situation": {
      "type": "object",
      "properties": {
        "event": {
          "type": "Event"
        },
        "location": {
          "type": "string"
        }
      }
    },
    "Person": {
      "type": "object",
      "properties": {}
    },
    "Venue": {
      "type": "object",
      "properties": {}
    },
    "Gathering": {
      "type": "object",
      "properties": {
        "venue": {
          "type": "Venue"
        }
      }
    },
    "PhysicalObject": {
      "type": "object",
      "properties": {}
    },
    "Amount": {
      "type": "object",
      "properties": {}
    },
    "Spouse1": {
      "type": "variable",
      "name": "Person"
    },
    "Spouse2": {
      "type": "variable",
      "name": "Person"
    },
    "Wedding": {
      "type": "variable",
      "name": "Gathering"
    },
    "WeddingReception": {
      "type": "variable",
      "name": "Gathering"
    },
    "InsuredMarquee": {
      "type": "variable",
      "name": "PhysicalObject"
    },
    "InsuredSum": {
      "type": "variable",
      "name": "Amount"
    },
    "WeddingSupplier": {
      "type": "variable",
      "name": "Company"
    }
  },
  "assignations": [
    {
      "type": "assignation",
      "name": "PolicyHolder",
      "value": {
        "type": "operation",
        "operator": "or",
        "arity": 2,
        "children": [
          {
            "type": "variable",
            "name": "Spouse1"
          },
          {
            "type": "variable",
            "name": "Spouse2"
          }
        ]
      }
    },
    {
      "type": "assignation",
      "name": "BookedVenue",
      "value": {
        "type": "operation",
        "operator": "or",
        "arity": 2,
        "children": [
          {
            "type": "variable",
            "name": "Wedding.venue"
          },
          {
            "type": "variable",
            "name": "WeddingReception.venue"
          }
        ]
      }
    }
  ],
  "sections": {
    "Section1": {
      "annotations": [
        {
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": " Section 1 – Cancellation, curtailment and rearrangement"
            }
          }
        }
      ],
      "sections": {
        "Section1.PartI": {
          "annotations": [
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": " ## Part I - Cancellation"
                }
              }
            },
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
                }
              }
            },
            {
              "name": "Payout",
              "properties": {
                "type": {
                  "type": "string",
                  "value": "Limit"
                },
                "amount": {
                  "type": "variable",
                  "name": "InsuredSum"
                },
                "unit": {
                  "type": "string",
                  "value": "USD"
                },
                "for": {
                  "type": "object",
                  "properties": {
                    "cost": {
                      "type": "string",
                      "value": "irrecoverable expenses"
                    },
                    "relation": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.IncurredBy"
                          },
                          "target": {
                            "type": "variable",
                            "name": "PolicyHolder"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.IncurredTo"
                          },
                          "target": {
                            "type": "variable",
                            "name": "WeddingSupplier"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.PrescribedBy"
                          },
                          "target": {
                            "type": "operation",
                            "operator": "or",
                            "arity": 2,
                            "children": [
                              {
                                "type": "string",
                                "value": "contract"
                              },
                              {
                                "type": "string",
                                "value": "agreement"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ],
          "instructions": [
            {
              "type": "operation",
              "operator": "and",
              "children": [
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "causal",
                      "children": [
                        {
                          "type": "operation",
                          "operator": "or",
                          "children": [
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToVenue",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "operation",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Event.FinancialFailure"
                                                },
                                                {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "name": "Event.Bankruptcy"
                                                    },
                                                    {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.Liquidation"
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.Administration"
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.HappenTo"
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "name": "BookedVenue"
                                                }
                                              }
                                            }
                                          },
                                          "annotations": [
                                            {
                                              "type": "annotation",
                                              "name": "Text",
                                              "properties": {
                                                "value": {
                                                  "type": "string",
                                                  "value": "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "logic_block",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "causal",
                                              "children": [
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.Fire"
                                                        },
                                                        {
                                                          "type": "operation",
                                                          "operator": "or",
                                                          "arity": 2,
                                                          "children": [
                                                            {
                                                              "type": "variable",
                                                              "name": "Event.NaturalCatastrophe"
                                                            },
                                                            {
                                                              "type": "variable",
                                                              "name": "Event.AdverseWeather"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "variable",
                                                      "name": "Event.Damage"
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenTo"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "BookedVenue"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          "annotations": [
                                            {
                                              "type": "annotation",
                                              "name": "Text",
                                              "properties": {
                                                "value": {
                                                  "type": "string",
                                                  "value": "b) damage to the venue caused by fire, natural catastrophe or adverse weather"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Event.Murder"
                                                },
                                                {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "name": "Event.Death"
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "name": "Event.Suicide"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.HappenAt"
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "name": "BookedVenue"
                                                }
                                              }
                                            }
                                          },
                                          "annotations": [
                                            {
                                              "type": "annotation",
                                              "name": "Text",
                                              "properties": {
                                                "value": {
                                                  "type": "string",
                                                  "value": "c) murder, death or suicide at the venue"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "variable",
                                              "name": "Event.ActOfTerrorism"
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.HappenAt"
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "name": "BookedVenue"
                                                }
                                              }
                                            }
                                          },
                                          "annotations": [
                                            {
                                              "type": "annotation",
                                              "name": "Text",
                                              "properties": {
                                                "value": {
                                                  "type": "string",
                                                  "value": "d) an act of terrorism at the venue"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "variable",
                                              "name": "Event.Closure"
                                            },
                                            "relation": [
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.HappenTo"
                                                  },
                                                  "target": {
                                                    "type": "variable",
                                                    "name": "BookedVenue"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.CausedBy"
                                                  },
                                                  "target": {
                                                    "type": "string",
                                                    "value": "relevant authority"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          "annotations": [
                                            {
                                              "type": "annotation",
                                              "name": "Text",
                                              "properties": {
                                                "value": {
                                                  "type": "string",
                                                  "value": "  e) closure by a relevant authority;"
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.UnableToHoldGathering"
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.By"
                                              },
                                              "target": {
                                                "type": "variable",
                                                "name": "BookedVenue"
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenTo"
                                              },
                                              "target": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "Wedding"
                                                  },
                                                  {
                                                    "type": "variable",
                                                    "name": "WeddingReception"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToDeathOrInjury",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Event.Death"
                                            },
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Event.Injury"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "Event.Sickness"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Spouse1"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "Spouse2"
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.InappropriateCircumstance"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Wedding"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "WeddingReception"
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToSupplier",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.NoShow"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.CausedBy"
                                            },
                                            "target": {
                                              "type": "string",
                                              "value": "booked and paid for professional Wedding Services Supplier"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Event.ImpossibleContinuationOfEvent"
                                            },
                                            {
                                              "type": "variable",
                                              "name": "Event.ImpossibleHappeningOfEvent"
                                            }
                                          ]
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Wedding"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "WeddingReception"
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToRedundancy",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.PolicyPurchase"
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Time",
                                      "properties": {
                                        "value": {
                                          "type": "number",
                                          "value": "16"
                                        },
                                        "unit": {
                                          "type": "string",
                                          "value": "Week"
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.NotificationOfLossOfJob"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "variable",
                                              "name": "PolicyHolder"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToOverseaPublicService",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "string",
                                      "value": "mobilized"
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "name": "Relation.HappenTo"
                                        },
                                        "target": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Spouse1"
                                            },
                                            {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Spouse2"
                                                },
                                                {
                                                  "type": "string",
                                                  "value": "couple close relative"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToNonApparenceOfMinister",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "variable",
                                      "name": "Event.NoShow"
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "name": "Relation.CausedBy"
                                        },
                                        "target": {
                                          "type": "string",
                                          "value": "intended officiating minister or registrar"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToCatNat",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Event.AdverseWeather"
                                            },
                                            {
                                              "type": "variable",
                                              "name": "Event.NaturalCatastrophe"
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.InabilityToReachPlace"
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenTo"
                                              },
                                              "target": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "PolicyHolder"
                                                  },
                                                  {
                                                    "type": "string",
                                                    "value": "more than 50% of Wedding.guests.count"
                                                  }
                                                ]
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenAt"
                                              },
                                              "target": {
                                                "type": "variable",
                                                "name": "BookedVenue"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CancellationDueToMarquee",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "variable",
                                          "name": "Event.Loss"
                                        },
                                        {
                                          "type": "variable",
                                          "name": "Event.Theft"
                                        }
                                      ]
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "name": "Relation.HappenTo"
                                        },
                                        "target": {
                                          "type": "variable",
                                          "name": "InsuredMarquee"
                                        }
                                      }
                                    },
                                    "endorsement": {
                                      "type": "string",
                                      "value": "MarqueeCover"
                                    }
                                  }
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "name": "Event.UnavoidableCancellation"
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "name": "Relation.HappenTo"
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "variable",
                                        "name": "Wedding"
                                      },
                                      {
                                        "type": "variable",
                                        "name": "WeddingReception"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "name": "Relation.CausedBy"
                                  },
                                  "target": {
                                    "type": "variable",
                                    "name": "PolicyHolder"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "or",
                      "children": [
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "name": "Event.IntentionToReplan"
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "name": "Relation.HappenTo"
                                  },
                                  "target": {
                                    "type": "operation",
                                    "operator": "or",
                                    "arity": 2,
                                    "children": [
                                      {
                                        "type": "variable",
                                        "name": "Wedding"
                                      },
                                      {
                                        "type": "variable",
                                        "name": "WeddingReception"
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "name": "Relation.By"
                                  },
                                  "target": {
                                    "type": "variable",
                                    "name": "PolicyHolder"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "name": "Event.Death"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "name": "Relation.HappenTo"
                                },
                                "target": {
                                  "type": "variable",
                                  "name": "PolicyHolder"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Section1.PartII": {
          "annotations": [
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": "## Part II - Curtailment"
                }
              }
            },
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": "We will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
                }
              }
            },
            {
              "name": "Payout",
              "properties": {
                "type": {
                  "type": "string",
                  "value": "Limit"
                },
                "amount": {
                  "type": "variable",
                  "name": "InsuredSum"
                },
                "unit": {
                  "type": "string",
                  "value": "USD"
                },
                "for": {
                  "type": "object",
                  "properties": {
                    "cost": {
                      "type": "string",
                      "value": "irrecoverable cost"
                    },
                    "relation": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "variable",
                          "name": "Relation.UnavoidablyIncurredBy"
                        },
                        "target": {
                          "type": "variable",
                          "name": "PolicyHolder"
                        }
                      }
                    }
                  }
                }
              }
            }
          ],
          "instructions": [
            {
              "type": "operation",
              "operator": "and",
              "children": [
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "causal",
                      "children": [
                        {
                          "type": "operation",
                          "operator": "or",
                          "children": [
                            {
                              "type": "logic_block",
                              "name": "CurtailmentSuddenDeath",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "variable",
                                          "name": "Event.Death"
                                        },
                                        {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Event.Injury"
                                            },
                                            {
                                              "type": "variable",
                                              "name": "Event.SeriousSickness"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "name": "Relation.HappenTo"
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "name": "PolicyHolder"
                                              },
                                              {
                                                "type": "string",
                                                "value": "couple close relative"
                                              }
                                            ]
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "name": "Relation.HappenAt"
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "name": "Wedding"
                                              },
                                              {
                                                "type": "variable",
                                                "name": "WeddingReception"
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CurtailmentVenueUnableContinueToHold",
                              "children": [
                                {
                                  "type": "operation",
                                  "operator": "causal",
                                  "children": [
                                    {
                                      "type": "operation",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "logic_block",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "causal",
                                              "children": [
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.NaturalCatastrophe"
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.AdverseWeather"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "variable",
                                                      "name": "Event.Damage"
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenTo"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "Venue"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "logic_block",
                                          "children": [
                                            {
                                              "type": "operation",
                                              "operator": "causal",
                                              "children": [
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "Event.Fire"
                                                        },
                                                        {
                                                          "type": "operation",
                                                          "operator": "or",
                                                          "arity": 2,
                                                          "children": [
                                                            {
                                                              "type": "variable",
                                                              "name": "Event.Death"
                                                            },
                                                            {
                                                              "type": "operation",
                                                              "operator": "or",
                                                              "arity": 2,
                                                              "children": [
                                                                {
                                                                  "type": "variable",
                                                                  "name": "Event.Suicide"
                                                                },
                                                                {
                                                                  "type": "variable",
                                                                  "name": "Event.Fire"
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    },
                                                    "relation": {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenAt"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "Venue"
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "block",
                                                  "name": "Situation",
                                                  "properties": {
                                                    "event": {
                                                      "type": "variable",
                                                      "name": "Event.Evacuation"
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "variable",
                                              "name": "Event.ActOfTerrorism"
                                            },
                                            "relation": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.HappenAt"
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "name": "Venue"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "block",
                                          "name": "Situation",
                                          "properties": {
                                            "event": {
                                              "type": "variable",
                                              "name": "Event.Closure"
                                            },
                                            "relation": [
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.HappenTo"
                                                  },
                                                  "target": {
                                                    "type": "variable",
                                                    "name": "Venue"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.CausedBy"
                                                  },
                                                  "target": {
                                                    "type": "string",
                                                    "value": "Relevant authority"
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "name": "Event.UnableToHoldGathering"
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenTo"
                                              },
                                              "target": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "Wedding"
                                                  },
                                                  {
                                                    "type": "variable",
                                                    "name": "WeddingReception"
                                                  }
                                                ]
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenAt"
                                              },
                                              "target": {
                                                "type": "variable",
                                                "name": "Venue"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "logic_block",
                              "name": "CurtailmentDueToMarquee",
                              "children": [
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "operation",
                                      "operator": "or",
                                      "arity": 2,
                                      "children": [
                                        {
                                          "type": "variable",
                                          "name": "Event.Loss"
                                        },
                                        {
                                          "type": "operation",
                                          "operator": "or",
                                          "arity": 2,
                                          "children": [
                                            {
                                              "type": "variable",
                                              "name": "Event.Theft"
                                            },
                                            {
                                              "type": "variable",
                                              "name": "Event.SevereDamage"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "name": "Relation.HappenTo"
                                        },
                                        "target": {
                                          "type": "variable",
                                          "name": "InsuredMarquee"
                                        }
                                      }
                                    },
                                    "endorsement": {
                                      "type": "string",
                                      "value": "MarqueeCover"
                                    }
                                  }
                                }
                              ],
                              "annotations": [
                                {
                                  "name": "Text",
                                  "properties": {
                                    "value": {
                                      "type": "string",
                                      "value": "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "name": "Event.Curtailment"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "name": "Relation.HappenTo"
                                },
                                "target": {
                                  "type": "operation",
                                  "operator": "or",
                                  "arity": 2,
                                  "children": [
                                    {
                                      "type": "variable",
                                      "name": "Wedding"
                                    },
                                    {
                                      "type": "variable",
                                      "name": "WeddingReception"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "name": "Event.IrrecoverableCosts"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "name": "Relation.IncurredBy"
                                },
                                "target": {
                                  "type": "variable",
                                  "name": "PolicyHolder"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "logic_block",
                  "children": [
                    {
                      "type": "operation",
                      "operator": "or",
                      "children": [
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "name": "Event.IntentionToReplan"
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "name": "Relation.HappenTo"
                                      },
                                      "target": {
                                        "type": "operation",
                                        "operator": "or",
                                        "arity": 2,
                                        "children": [
                                          {
                                            "type": "variable",
                                            "name": "Wedding"
                                          },
                                          {
                                            "type": "variable",
                                            "name": "WeddingReception"
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "name": "Relation.By"
                                      },
                                      "target": {
                                        "type": "variable",
                                        "name": "PolicyHolder"
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "logic_block",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "name": "Event.Death"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "name": "Relation.HappenTo"
                                    },
                                    "target": {
                                      "type": "variable",
                                      "name": "PolicyHolder"
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "annotations": [
                    {
                      "name": "Text",
                      "properties": {
                        "value": {
                          "type": "string",
                          "value": "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Section1.PartIII": {
          "annotations": [
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": "## Part III - Rearrangement"
                }
              }
            },
            {
              "name": "Text",
              "properties": {
                "value": {
                  "type": "string",
                  "value": "In the event of a covered event in Part I or II above, we will reimburse you for reasonable and necessary additional  costs incurred in rearranging the wedding and/or wedding  reception to the same standard as originally booked and budgeted to up to a maximum of 10% of the sum insured."
                }
              }
            },
            {
              "name": "Payout",
              "properties": {
                "type": {
                  "type": "string",
                  "value": "Limit"
                },
                "amount": {
                  "type": "operation",
                  "operator": "percentOf",
                  "arity": 2,
                  "children": [
                    {
                      "type": "number",
                      "value": "10"
                    },
                    {
                      "type": "variable",
                      "name": "InsuredSum"
                    }
                  ]
                },
                "unit": {
                  "type": "string",
                  "value": "USD"
                },
                "for": {
                  "type": "object",
                  "properties": {
                    "cost": {
                      "type": "string",
                      "value": "reasonable and necessary additional costs"
                    },
                    "relation": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.IncurredBy"
                          },
                          "target": {
                            "type": "variable",
                            "name": "PolicyHolder"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.IncurredFor"
                          },
                          "target": {
                            "type": "variable",
                            "name": "Event.Rearrangement"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "variable",
                            "name": "Relation.HappenTo"
                          },
                          "target": {
                            "type": "operation",
                            "operator": "or",
                            "arity": 2,
                            "children": [
                              {
                                "type": "variable",
                                "name": "Wedding"
                              },
                              {
                                "type": "variable",
                                "name": "WeddingReception"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ],
          "instructions": [
            {
              "type": "operation",
              "operator": "or",
              "children": [
                {
                  "type": "logic_block",
                  "isSectionCall": true,
                  "sectionName": "Section1.PartI",
                  "children": [
                    [
                      {
                        "type": "operation",
                        "operator": "and",
                        "children": [
                          {
                            "type": "logic_block",
                            "children": [
                              {
                                "type": "operation",
                                "operator": "causal",
                                "children": [
                                  {
                                    "type": "operation",
                                    "operator": "or",
                                    "children": [
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToVenue",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "operation",
                                                "operator": "or",
                                                "children": [
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Event.FinancialFailure"
                                                          },
                                                          {
                                                            "type": "operation",
                                                            "operator": "or",
                                                            "arity": 2,
                                                            "children": [
                                                              {
                                                                "type": "variable",
                                                                "name": "Event.Bankruptcy"
                                                              },
                                                              {
                                                                "type": "operation",
                                                                "operator": "or",
                                                                "arity": 2,
                                                                "children": [
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.Liquidation"
                                                                  },
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.Administration"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      "relation": {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "variable",
                                                            "name": "Relation.HappenTo"
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "name": "BookedVenue"
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "annotations": [
                                                      {
                                                        "type": "annotation",
                                                        "name": "Text",
                                                        "properties": {
                                                          "value": {
                                                            "type": "string",
                                                            "value": "a) ceasing to trade due to financial failure, bankruptcy, liquidation or administration"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "logic_block",
                                                    "children": [
                                                      {
                                                        "type": "operation",
                                                        "operator": "causal",
                                                        "children": [
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "operation",
                                                                "operator": "or",
                                                                "arity": 2,
                                                                "children": [
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.Fire"
                                                                  },
                                                                  {
                                                                    "type": "operation",
                                                                    "operator": "or",
                                                                    "arity": 2,
                                                                    "children": [
                                                                      {
                                                                        "type": "variable",
                                                                        "name": "Event.NaturalCatastrophe"
                                                                      },
                                                                      {
                                                                        "type": "variable",
                                                                        "name": "Event.AdverseWeather"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "variable",
                                                                "name": "Event.Damage"
                                                              },
                                                              "relation": {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "variable",
                                                                    "name": "Relation.HappenTo"
                                                                  },
                                                                  "target": {
                                                                    "type": "variable",
                                                                    "name": "BookedVenue"
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ],
                                                    "annotations": [
                                                      {
                                                        "type": "annotation",
                                                        "name": "Text",
                                                        "properties": {
                                                          "value": {
                                                            "type": "string",
                                                            "value": "b) damage to the venue caused by fire, natural catastrophe or adverse weather"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Event.Murder"
                                                          },
                                                          {
                                                            "type": "operation",
                                                            "operator": "or",
                                                            "arity": 2,
                                                            "children": [
                                                              {
                                                                "type": "variable",
                                                                "name": "Event.Death"
                                                              },
                                                              {
                                                                "type": "variable",
                                                                "name": "Event.Suicide"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      "relation": {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "variable",
                                                            "name": "Relation.HappenAt"
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "name": "BookedVenue"
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "annotations": [
                                                      {
                                                        "type": "annotation",
                                                        "name": "Text",
                                                        "properties": {
                                                          "value": {
                                                            "type": "string",
                                                            "value": "c) murder, death or suicide at the venue"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "variable",
                                                        "name": "Event.ActOfTerrorism"
                                                      },
                                                      "relation": {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "variable",
                                                            "name": "Relation.HappenAt"
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "name": "BookedVenue"
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "annotations": [
                                                      {
                                                        "type": "annotation",
                                                        "name": "Text",
                                                        "properties": {
                                                          "value": {
                                                            "type": "string",
                                                            "value": "d) an act of terrorism at the venue"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "variable",
                                                        "name": "Event.Closure"
                                                      },
                                                      "relation": [
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "variable",
                                                              "name": "Relation.HappenTo"
                                                            },
                                                            "target": {
                                                              "type": "variable",
                                                              "name": "BookedVenue"
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "variable",
                                                              "name": "Relation.CausedBy"
                                                            },
                                                            "target": {
                                                              "type": "string",
                                                              "value": "relevant authority"
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    },
                                                    "annotations": [
                                                      {
                                                        "type": "annotation",
                                                        "name": "Text",
                                                        "properties": {
                                                          "value": {
                                                            "type": "string",
                                                            "value": "  e) closure by a relevant authority;"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.UnableToHoldGathering"
                                                  },
                                                  "relation": [
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.By"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "BookedVenue"
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenTo"
                                                        },
                                                        "target": {
                                                          "type": "operation",
                                                          "operator": "or",
                                                          "arity": 2,
                                                          "children": [
                                                            {
                                                              "type": "variable",
                                                              "name": "Wedding"
                                                            },
                                                            {
                                                              "type": "variable",
                                                              "name": "WeddingReception"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": " 1. the booked venue for the wedding or wedding reception being unable to hold your wedding and/or wedding reception due to:"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToDeathOrInjury",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.Death"
                                                      },
                                                      {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Event.Injury"
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "name": "Event.Sickness"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  "relation": {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "variable",
                                                        "name": "Relation.HappenTo"
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Spouse1"
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "name": "Spouse2"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.InappropriateCircumstance"
                                                  },
                                                  "relation": {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "variable",
                                                        "name": "Relation.HappenTo"
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Wedding"
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "name": "WeddingReception"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "  2. the death, injury or sickness of one or both of the couple or their close relative which would make having or continuing with the wedding and/or wedding reception inappropriate;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToSupplier",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.NoShow"
                                                  },
                                                  "relation": {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "variable",
                                                        "name": "Relation.CausedBy"
                                                      },
                                                      "target": {
                                                        "type": "string",
                                                        "value": "booked and paid for professional Wedding Services Supplier"
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.ImpossibleContinuationOfEvent"
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.ImpossibleHappeningOfEvent"
                                                      }
                                                    ]
                                                  },
                                                  "relation": {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "variable",
                                                        "name": "Relation.HappenTo"
                                                      },
                                                      "target": {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Wedding"
                                                          },
                                                          {
                                                            "type": "variable",
                                                            "name": "WeddingReception"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "3. the total non-appearance of any booked and paid for professional Wedding Services Supplier which would make having or continuing with the wedding or wedding reception impossible;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToRedundancy",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.PolicyPurchase"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "block",
                                                "name": "Time",
                                                "properties": {
                                                  "value": {
                                                    "type": "number",
                                                    "value": "16"
                                                  },
                                                  "unit": {
                                                    "type": "string",
                                                    "value": "Week"
                                                  }
                                                }
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.NotificationOfLossOfJob"
                                                  },
                                                  "relation": {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "variable",
                                                        "name": "Relation.HappenTo"
                                                      },
                                                      "target": {
                                                        "type": "variable",
                                                        "name": "PolicyHolder"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "4. your redundancy or that of any of your close relatives who have or would have made proven, significant, financial contributions on which the wedding arrangements depend, where notice is received at least 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation and where there is a clear intention to rearrange the wedding; "
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToOverseaPublicService",
                                        "children": [
                                          {
                                            "type": "block",
                                            "name": "Situation",
                                            "properties": {
                                              "event": {
                                                "type": "string",
                                                "value": "mobilized"
                                              },
                                              "relation": {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.HappenTo"
                                                  },
                                                  "target": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Spouse1"
                                                      },
                                                      {
                                                        "type": "operation",
                                                        "operator": "or",
                                                        "arity": 2,
                                                        "children": [
                                                          {
                                                            "type": "variable",
                                                            "name": "Spouse2"
                                                          },
                                                          {
                                                            "type": "string",
                                                            "value": "couple close relative"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "5. one of the couple or a close relative being unforeseeably posted overseas or being called on unavoidable and necessary duty where that person is a serving member of the UK armed forces, ambulance or health service, coastguard, fire brigade or police force; "
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToNonApparenceOfMinister",
                                        "children": [
                                          {
                                            "type": "block",
                                            "name": "Situation",
                                            "properties": {
                                              "event": {
                                                "type": "variable",
                                                "name": "Event.NoShow"
                                              },
                                              "relation": {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.CausedBy"
                                                  },
                                                  "target": {
                                                    "type": "string",
                                                    "value": "intended officiating minister or registrar"
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "6. the non-appearance of the intended officiating minister or registrar and no substitute can be obtained;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToCatNat",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.AdverseWeather"
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.NaturalCatastrophe"
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.InabilityToReachPlace"
                                                  },
                                                  "relation": [
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenTo"
                                                        },
                                                        "target": {
                                                          "type": "operation",
                                                          "operator": "or",
                                                          "arity": 2,
                                                          "children": [
                                                            {
                                                              "type": "variable",
                                                              "name": "PolicyHolder"
                                                            },
                                                            {
                                                              "type": "string",
                                                              "value": "more than 50% of Wedding.guests.count"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenAt"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "BookedVenue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "7. your inability or that of at least 50% of the guests to reach the wedding or wedding reception venue due to adverse weather conditions or natural  catastrophe;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CancellationDueToMarquee",
                                        "children": [
                                          {
                                            "type": "block",
                                            "name": "Situation",
                                            "properties": {
                                              "event": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "Event.Loss"
                                                  },
                                                  {
                                                    "type": "variable",
                                                    "name": "Event.Theft"
                                                  }
                                                ]
                                              },
                                              "relation": {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.HappenTo"
                                                  },
                                                  "target": {
                                                    "type": "variable",
                                                    "name": "InsuredMarquee"
                                                  }
                                                }
                                              },
                                              "endorsement": {
                                                "type": "string",
                                                "value": "MarqueeCover"
                                              }
                                            }
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "8. loss or theft of or severe damage to the marquee (only applies if you have purchased the optional marquee cover)."
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "block",
                                    "name": "Situation",
                                    "properties": {
                                      "event": {
                                        "type": "variable",
                                        "name": "Event.UnavoidableCancellation"
                                      },
                                      "relation": [
                                        {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Wedding"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "WeddingReception"
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.CausedBy"
                                            },
                                            "target": {
                                              "type": "variable",
                                              "name": "PolicyHolder"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "logic_block",
                            "children": [
                              {
                                "type": "operation",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "block",
                                    "name": "Situation",
                                    "properties": {
                                      "event": {
                                        "type": "variable",
                                        "name": "Event.IntentionToReplan"
                                      },
                                      "relation": [
                                        {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.HappenTo"
                                            },
                                            "target": {
                                              "type": "operation",
                                              "operator": "or",
                                              "arity": 2,
                                              "children": [
                                                {
                                                  "type": "variable",
                                                  "name": "Wedding"
                                                },
                                                {
                                                  "type": "variable",
                                                  "name": "WeddingReception"
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "name": "Relation.By"
                                            },
                                            "target": {
                                              "type": "variable",
                                              "name": "PolicyHolder"
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "block",
                                    "name": "Situation",
                                    "properties": {
                                      "event": {
                                        "type": "variable",
                                        "name": "Event.Death"
                                      },
                                      "relation": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "name": "Relation.HappenTo"
                                          },
                                          "target": {
                                            "type": "variable",
                                            "name": "PolicyHolder"
                                          }
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "annotations": [
                              {
                                "type": "annotation",
                                "name": "Text",
                                "properties": {
                                  "value": {
                                    "type": "string",
                                    "value": "Special claims conditions relating to Section 1, Part I – In the event of a valid claim for cancellation there must be a clear intention to rearrange the wedding at a later date except where the cancellation is caused by your death."
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  ]
                },
                {
                  "type": "logic_block",
                  "isSectionCall": true,
                  "sectionName": "Section1.PartII",
                  "children": [
                    [
                      {
                        "type": "operation",
                        "operator": "and",
                        "children": [
                          {
                            "type": "logic_block",
                            "children": [
                              {
                                "type": "operation",
                                "operator": "causal",
                                "children": [
                                  {
                                    "type": "operation",
                                    "operator": "or",
                                    "children": [
                                      {
                                        "type": "logic_block",
                                        "name": "CurtailmentSuddenDeath",
                                        "children": [
                                          {
                                            "type": "block",
                                            "name": "Situation",
                                            "properties": {
                                              "event": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "Event.Death"
                                                  },
                                                  {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.Injury"
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.SeriousSickness"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              "relation": [
                                                {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "variable",
                                                      "name": "Relation.HappenTo"
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "PolicyHolder"
                                                        },
                                                        {
                                                          "type": "string",
                                                          "value": "couple close relative"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "variable",
                                                      "name": "Relation.HappenAt"
                                                    },
                                                    "target": {
                                                      "type": "operation",
                                                      "operator": "or",
                                                      "arity": 2,
                                                      "children": [
                                                        {
                                                          "type": "variable",
                                                          "name": "Wedding"
                                                        },
                                                        {
                                                          "type": "variable",
                                                          "name": "WeddingReception"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "1. the sudden death, injury or serious sickness of you or a close relative at the wedding or wedding reception;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CurtailmentVenueUnableContinueToHold",
                                        "children": [
                                          {
                                            "type": "operation",
                                            "operator": "causal",
                                            "children": [
                                              {
                                                "type": "operation",
                                                "operator": "or",
                                                "children": [
                                                  {
                                                    "type": "logic_block",
                                                    "children": [
                                                      {
                                                        "type": "operation",
                                                        "operator": "causal",
                                                        "children": [
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "operation",
                                                                "operator": "or",
                                                                "arity": 2,
                                                                "children": [
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.NaturalCatastrophe"
                                                                  },
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.AdverseWeather"
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "variable",
                                                                "name": "Event.Damage"
                                                              },
                                                              "relation": {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "variable",
                                                                    "name": "Relation.HappenTo"
                                                                  },
                                                                  "target": {
                                                                    "type": "variable",
                                                                    "name": "Venue"
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "logic_block",
                                                    "children": [
                                                      {
                                                        "type": "operation",
                                                        "operator": "causal",
                                                        "children": [
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "operation",
                                                                "operator": "or",
                                                                "arity": 2,
                                                                "children": [
                                                                  {
                                                                    "type": "variable",
                                                                    "name": "Event.Fire"
                                                                  },
                                                                  {
                                                                    "type": "operation",
                                                                    "operator": "or",
                                                                    "arity": 2,
                                                                    "children": [
                                                                      {
                                                                        "type": "variable",
                                                                        "name": "Event.Death"
                                                                      },
                                                                      {
                                                                        "type": "operation",
                                                                        "operator": "or",
                                                                        "arity": 2,
                                                                        "children": [
                                                                          {
                                                                            "type": "variable",
                                                                            "name": "Event.Suicide"
                                                                          },
                                                                          {
                                                                            "type": "variable",
                                                                            "name": "Event.Fire"
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              "relation": {
                                                                "type": "object",
                                                                "properties": {
                                                                  "type": {
                                                                    "type": "variable",
                                                                    "name": "Relation.HappenAt"
                                                                  },
                                                                  "target": {
                                                                    "type": "variable",
                                                                    "name": "Venue"
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "type": "block",
                                                            "name": "Situation",
                                                            "properties": {
                                                              "event": {
                                                                "type": "variable",
                                                                "name": "Event.Evacuation"
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "variable",
                                                        "name": "Event.ActOfTerrorism"
                                                      },
                                                      "relation": {
                                                        "type": "object",
                                                        "properties": {
                                                          "type": {
                                                            "type": "variable",
                                                            "name": "Relation.HappenAt"
                                                          },
                                                          "target": {
                                                            "type": "variable",
                                                            "name": "Venue"
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "block",
                                                    "name": "Situation",
                                                    "properties": {
                                                      "event": {
                                                        "type": "variable",
                                                        "name": "Event.Closure"
                                                      },
                                                      "relation": [
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "variable",
                                                              "name": "Relation.HappenTo"
                                                            },
                                                            "target": {
                                                              "type": "variable",
                                                              "name": "Venue"
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "object",
                                                          "properties": {
                                                            "type": {
                                                              "type": "variable",
                                                              "name": "Relation.CausedBy"
                                                            },
                                                            "target": {
                                                              "type": "string",
                                                              "value": "Relevant authority"
                                                            }
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                                ]
                                              },
                                              {
                                                "type": "block",
                                                "name": "Situation",
                                                "properties": {
                                                  "event": {
                                                    "type": "variable",
                                                    "name": "Event.UnableToHoldGathering"
                                                  },
                                                  "relation": [
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenTo"
                                                        },
                                                        "target": {
                                                          "type": "operation",
                                                          "operator": "or",
                                                          "arity": 2,
                                                          "children": [
                                                            {
                                                              "type": "variable",
                                                              "name": "Wedding"
                                                            },
                                                            {
                                                              "type": "variable",
                                                              "name": "WeddingReception"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "object",
                                                      "properties": {
                                                        "type": {
                                                          "type": "variable",
                                                          "name": "Relation.HappenAt"
                                                        },
                                                        "target": {
                                                          "type": "variable",
                                                          "name": "Venue"
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "2. the venue for the wedding being unable to continue to hold your wedding due to damage to the venue caused by natural catastrophe or adverse weather, evacuation due to fire, death, murder or suicide at the venue, an act of terrorism at the venue or its closure by a relevant authority;"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "type": "logic_block",
                                        "name": "CurtailmentDueToMarquee",
                                        "children": [
                                          {
                                            "type": "block",
                                            "name": "Situation",
                                            "properties": {
                                              "event": {
                                                "type": "operation",
                                                "operator": "or",
                                                "arity": 2,
                                                "children": [
                                                  {
                                                    "type": "variable",
                                                    "name": "Event.Loss"
                                                  },
                                                  {
                                                    "type": "operation",
                                                    "operator": "or",
                                                    "arity": 2,
                                                    "children": [
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.Theft"
                                                      },
                                                      {
                                                        "type": "variable",
                                                        "name": "Event.SevereDamage"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              "relation": {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "variable",
                                                    "name": "Relation.HappenTo"
                                                  },
                                                  "target": {
                                                    "type": "variable",
                                                    "name": "InsuredMarquee"
                                                  }
                                                }
                                              },
                                              "endorsement": {
                                                "type": "string",
                                                "value": "MarqueeCover"
                                              }
                                            }
                                          }
                                        ],
                                        "annotations": [
                                          {
                                            "name": "Text",
                                            "properties": {
                                              "value": {
                                                "type": "string",
                                                "value": "3. loss or theft of or severe damage to the marquee (if you have purchased optional marquee cover),"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "block",
                                    "name": "Situation",
                                    "properties": {
                                      "event": {
                                        "type": "variable",
                                        "name": "Event.Curtailment"
                                      },
                                      "relation": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "name": "Relation.HappenTo"
                                          },
                                          "target": {
                                            "type": "operation",
                                            "operator": "or",
                                            "arity": 2,
                                            "children": [
                                              {
                                                "type": "variable",
                                                "name": "Wedding"
                                              },
                                              {
                                                "type": "variable",
                                                "name": "WeddingReception"
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "block",
                                    "name": "Situation",
                                    "properties": {
                                      "event": {
                                        "type": "variable",
                                        "name": "Event.IrrecoverableCosts"
                                      },
                                      "relation": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "name": "Relation.IncurredBy"
                                          },
                                          "target": {
                                            "type": "variable",
                                            "name": "PolicyHolder"
                                          }
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "logic_block",
                            "children": [
                              {
                                "type": "operation",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "logic_block",
                                    "children": [
                                      {
                                        "type": "block",
                                        "name": "Situation",
                                        "properties": {
                                          "event": {
                                            "type": "variable",
                                            "name": "Event.IntentionToReplan"
                                          },
                                          "relation": [
                                            {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.HappenTo"
                                                },
                                                "target": {
                                                  "type": "operation",
                                                  "operator": "or",
                                                  "arity": 2,
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "name": "Wedding"
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "name": "WeddingReception"
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "variable",
                                                  "name": "Relation.By"
                                                },
                                                "target": {
                                                  "type": "variable",
                                                  "name": "PolicyHolder"
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "type": "logic_block",
                                    "children": [
                                      {
                                        "type": "block",
                                        "name": "Situation",
                                        "properties": {
                                          "event": {
                                            "type": "variable",
                                            "name": "Event.Death"
                                          },
                                          "relation": {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "name": "Relation.HappenTo"
                                              },
                                              "target": {
                                                "type": "variable",
                                                "name": "PolicyHolder"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ],
                            "annotations": [
                              {
                                "name": "Text",
                                "properties": {
                                  "value": {
                                    "type": "string",
                                    "value": "Special claims conditions relating to Section 1, Part II– In the event of a valid claim for curtailment there must be a clear intention to rearrange the wedding at a later date except where the curtailment is caused by your death."
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
}
