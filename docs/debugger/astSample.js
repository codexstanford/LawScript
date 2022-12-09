const SAMPLE = {
  "annotations": [],
  "chains": {
    "Cancellation": {
      "type": "chain",
      "childrenType": "content",
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
                  "childrenType": "content",
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
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Event.FinancialFailure",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "FinancialFailure",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "financial failure"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Bankruptcy",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Bankruptcy",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "bankruptcy"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Liquidation",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Liquidation",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "liquidation"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Administration",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Administration",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "administration"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "BookedVenue",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "alias"
                                      }
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
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Event.Fire",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Fire",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Fire"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.NaturalCatastrophe",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "NaturalCatastrophe",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "natural catastrophe"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.AdverseWeather",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "AdverseWeather",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "adverse weather"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "value": "Event.Damage",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Damage",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Damage"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenTo",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenTo",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened to"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "alias"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                }
                              ],
                              "childrenType": "content",
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
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Event.Murder",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Murder",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Murder"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Death",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Death",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Death"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Suicide",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Suicide",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Suicide"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenAt",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenAt",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened At"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "BookedVenue",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "alias"
                                      }
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
                                  "value": "Event.ActOfTerrorism",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "ActOfTerrorism",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Act of terrorism"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenAt",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenAt",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened At"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "BookedVenue",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "alias"
                                      }
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
                                  "value": "Event.Closure",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Closure",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Closure"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenTo",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenTo",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened to"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "variable",
                                        "value": "BookedVenue",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "alias"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.CausedBy",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "CausedBy",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Caused by"
                                              }
                                            }
                                          }
                                        }
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
                          ],
                          "childrenType": "operand"
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "value": "Event.UnableToHoldGathering",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "UnableToHoldGathering",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "unable to hold gathering"
                                    }
                                  }
                                }
                              }
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.By",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "By",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "By"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "BookedVenue",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "alias"
                                    }
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.HappenTo",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "HappenTo",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "Happened to"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "expression",
                                    "operator": "or",
                                    "children": [
                                      {
                                        "type": "variable",
                                        "value": "Wedding",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "Gathering"
                                        }
                                      },
                                      {
                                        "type": "variable",
                                        "value": "WeddingReception",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "Gathering"
                                        }
                                      }
                                    ],
                                    "childrenType": "operand"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
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
                              "type": "expression",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Event.Death",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Death",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Death"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "Event.Injury",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Injury",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Injury"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "Event.Sickness",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Sickness",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Sickness"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "value": "Relation.HappenTo",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Relation",
                                    "key": "HappenTo",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Happened to"
                                        }
                                      }
                                    }
                                  }
                                },
                                "target": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Spouse1",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Person"
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Spouse2",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Person"
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
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
                              "value": "Event.InapropriateCircumpstance",
                              "class": "scopeVariable"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "value": "Relation.HappenTo",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Relation",
                                    "key": "HappenTo",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Happened to"
                                        }
                                      }
                                    }
                                  }
                                },
                                "target": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Wedding",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Gathering"
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "WeddingReception",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Gathering"
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                }
                              }
                            }
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
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
                              "value": "Event.NoShow",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "NoShow",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "No show"
                                    }
                                  }
                                }
                              }
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "value": "Relation.CausedBy",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Relation",
                                    "key": "CausedBy",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Caused by"
                                        }
                                      }
                                    }
                                  }
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
                              "type": "expression",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Event.ImpossibleContinuationOfEvent",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "ImpossibleContinuationOfEvent",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Impossible Continuation of Event"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "Event.ImpossibleHappeningOfEvent",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "ImpossibleHappeningOfEvent",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Impossible Happening of Event"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "value": "Relation.HappenTo",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Relation",
                                    "key": "HappenTo",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Happened to"
                                        }
                                      }
                                    }
                                  }
                                },
                                "target": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Wedding",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Gathering"
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "WeddingReception",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "Gathering"
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                }
                              }
                            }
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
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
                              "value": "Event.PolicyPurchase",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "PolicyPurchase",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Policy Purchase"
                                    }
                                  }
                                }
                              }
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
                              "value": "Event.NotificationOfLossOfJob",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "NotificationOfLossOfJob",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Notification of loss of job"
                                    }
                                  }
                                }
                              }
                            },
                            "relation": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "variable",
                                  "value": "Relation.HappenTo",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Relation",
                                    "key": "HappenTo",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Happened to"
                                        }
                                      }
                                    }
                                  }
                                },
                                "target": {
                                  "type": "variable",
                                  "value": "PolicyHolder",
                                  "class": "namedVariable",
                                  "info": {
                                    "type": "alias"
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
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
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "expression",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Spouse1",
                                  "class": "namedVariable",
                                  "info": {
                                    "type": "Person"
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "Spouse2",
                                  "class": "namedVariable",
                                  "info": {
                                    "type": "Person"
                                  }
                                },
                                {
                                  "type": "string",
                                  "value": "couple close relative"
                                }
                              ],
                              "childrenType": "operand"
                            }
                          }
                        }
                      }
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
                  "children": [
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "variable",
                          "value": "Event.NoShow",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "NoShow",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "No show"
                                }
                              }
                            }
                          }
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.CausedBy",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "CausedBy",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Caused by"
                                    }
                                  }
                                }
                              }
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
                      "type": "annotation",
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
                  "childrenType": "content",
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
                              "type": "expression",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Event.AdverseWeather",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "AdverseWeather",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "adverse weather"
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "Event.NaturalCatastrophe",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "NaturalCatastrophe",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "natural catastrophe"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          }
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "value": "Event.InabilityToReachPlace",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "InabilityToReachPlace",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Inability to reach a place"
                                    }
                                  }
                                }
                              }
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.HappenTo",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "HappenTo",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "Happened to"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "expression",
                                    "operator": "or",
                                    "children": [
                                      {
                                        "type": "variable",
                                        "value": "PolicyHolder",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "alias"
                                        }
                                      },
                                      {
                                        "type": "string",
                                        "value": "more than 50% of Wedding.guests.count"
                                      }
                                    ],
                                    "childrenType": "operand"
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.HappenAt",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "HappenAt",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "Happened At"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "BookedVenue",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "alias"
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
                  "children": [
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "expression",
                          "operator": "or",
                          "children": [
                            {
                              "type": "variable",
                              "value": "Event.Loss",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "Loss",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Loss"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "variable",
                              "value": "Event.Theft",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "Theft",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Theft"
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "childrenType": "operand"
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "variable",
                              "value": "InsuredMarquee",
                              "class": "namedVariable",
                              "info": {
                                "type": "PhysicalObject"
                              }
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
                      "type": "annotation",
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
              ],
              "childrenType": "operand"
            },
            {
              "type": "block",
              "name": "Situation",
              "properties": {
                "event": {
                  "type": "variable",
                  "value": "Event.UnavoidableCancellation",
                  "class": "dictionaryValue",
                  "info": {
                    "dictionary": "Event",
                    "key": "UnavoidableCancellation",
                    "value": {
                      "type": "object",
                      "properties": {
                        "displayName": {
                          "type": "string",
                          "value": "Unavoidable cancellation"
                        }
                      }
                    }
                  }
                },
                "relation": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.HappenTo",
                        "class": "dictionaryValue",
                        "info": {
                          "dictionary": "Relation",
                          "key": "HappenTo",
                          "value": {
                            "type": "object",
                            "properties": {
                              "displayName": {
                                "type": "string",
                                "value": "Happened to"
                              }
                            }
                          }
                        }
                      },
                      "target": {
                        "type": "expression",
                        "operator": "or",
                        "children": [
                          {
                            "type": "variable",
                            "value": "Wedding",
                            "class": "namedVariable",
                            "info": {
                              "type": "Gathering"
                            }
                          },
                          {
                            "type": "variable",
                            "value": "WeddingReception",
                            "class": "namedVariable",
                            "info": {
                              "type": "Gathering"
                            }
                          }
                        ],
                        "childrenType": "operand"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.CausedBy",
                        "class": "dictionaryValue",
                        "info": {
                          "dictionary": "Relation",
                          "key": "CausedBy",
                          "value": {
                            "type": "object",
                            "properties": {
                              "displayName": {
                                "type": "string",
                                "value": "Caused by"
                              }
                            }
                          }
                        }
                      },
                      "target": {
                        "type": "variable",
                        "value": "PolicyHolder",
                        "class": "namedVariable",
                        "info": {
                          "type": "alias"
                        }
                      }
                    }
                  }
                ]
              }
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
                          "value": "Event.IntentionToReplan",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "IntentionToReplan",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Clear intention to replan"
                                }
                              }
                            }
                          }
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.HappenTo",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "HappenTo",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Happened to"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "expression",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  }
                                ],
                                "childrenType": "operand"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.By",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "By",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "By"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "variable",
                                "value": "PolicyHolder",
                                "class": "namedVariable",
                                "info": {
                                  "type": "alias"
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "block",
                      "chainOperator": {
                        "type": "block_operator",
                        "operator": "previous"
                      },
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "variable",
                          "value": "Event.Death",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "Death",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Death"
                                }
                              }
                            }
                          }
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "variable",
                              "value": "PolicyHolder",
                              "class": "namedVariable",
                              "info": {
                                "type": "alias"
                              }
                            }
                          }
                        }
                      }
                    }
                  ],
                  "childrenType": "operand"
                }
              ],
              "childrenType": "content",
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
          ],
          "childrenType": "operand"
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": " ## Part I - Cancellation\nWe will pay up to the amount shown in the schedule in total for any irrecoverable expenses you have paid for or which you have to pay for, under contract or subsequent agreement for the services of any wedding services supplier not used as a direct result of the unavoidable cancellation by you of the wedding or wedding reception caused by any of the following reasons:"
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "variable",
              "value": "InsuredSum",
              "class": "namedVariable",
              "info": {
                "type": "Amount"
              }
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
                        "value": "Relation.IncurBy",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "variable",
                        "value": "PolicyHolder",
                        "class": "namedVariable",
                        "info": {
                          "type": "alias"
                        }
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.IncurTo",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "variable",
                        "value": "WeddingSuplier",
                        "class": "scopeVariable"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.PrescribedBy",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "expression",
                        "operator": "or",
                        "children": [
                          {
                            "type": "string",
                            "value": "contract"
                          },
                          {
                            "type": "string",
                            "value": "agreement"
                          }
                        ],
                        "childrenType": "operand"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    "Curtailment": {
      "type": "chain",
      "childrenType": "content",
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
                  "childrenType": "content",
                  "children": [
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "expression",
                          "operator": "or",
                          "children": [
                            {
                              "type": "variable",
                              "value": "Event.death",
                              "class": "scopeVariable"
                            },
                            {
                              "type": "variable",
                              "value": "Event.injury",
                              "class": "scopeVariable"
                            },
                            {
                              "type": "variable",
                              "value": "Event.SeriousSickness",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "SeriousSickness",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Serious Sickness"
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "childrenType": "operand"
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.HappenTo",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "HappenTo",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Happened to"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "expression",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "PolicyHolder",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "alias"
                                    }
                                  },
                                  {
                                    "type": "string",
                                    "value": "couple close relative"
                                  }
                                ],
                                "childrenType": "operand"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.HappenAt",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "HappenAt",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Happened At"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "expression",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  }
                                ],
                                "childrenType": "operand"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
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
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Event.NaturalCatastrophe",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "NaturalCatastrophe",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "natural catastrophe"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.AdverseWeather",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "AdverseWeather",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "adverse weather"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      }
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "value": "Event.Damage",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Damage",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Damage"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappendTo",
                                              "class": "scopeVariable"
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "Venue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "class"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                }
                              ],
                              "childrenType": "content"
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
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Event.Fire",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Fire",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Fire"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Death",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Death",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Death"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Suicide",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Suicide",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Suicide"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Fire",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Fire",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Fire"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenAt",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenAt",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened At"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "Venue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "class"
                                              }
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
                                          "value": "Event.Evacuation",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Evacuation",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Evacuation"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                }
                              ],
                              "childrenType": "content"
                            },
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "value": "Event.ActOfTerrorism",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "ActOfTerrorism",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Act of terrorism"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenAt",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenAt",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened At"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "Venue",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "class"
                                      }
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
                                  "value": "Event.Closure",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Closure",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Closure"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenTo",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenTo",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened to"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "variable",
                                        "value": "Venue",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "class"
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.CausedBy",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "CausedBy",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Caused by"
                                              }
                                            }
                                          }
                                        }
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
                          ],
                          "childrenType": "operand"
                        },
                        {
                          "type": "block",
                          "name": "Situation",
                          "properties": {
                            "event": {
                              "type": "variable",
                              "value": "Event.UnableToHoldGathering",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "UnableToHoldGathering",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "unable to hold gathering"
                                    }
                                  }
                                }
                              }
                            },
                            "relation": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.HappenTo",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "HappenTo",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "Happened to"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "expression",
                                    "operator": "or",
                                    "children": [
                                      {
                                        "type": "variable",
                                        "value": "Wedding",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "Gathering"
                                        }
                                      },
                                      {
                                        "type": "variable",
                                        "value": "WeddingReception",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "Gathering"
                                        }
                                      }
                                    ],
                                    "childrenType": "operand"
                                  }
                                }
                              },
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "variable",
                                    "value": "Relation.HappenAt",
                                    "class": "dictionaryValue",
                                    "info": {
                                      "dictionary": "Relation",
                                      "key": "HappenAt",
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "displayName": {
                                            "type": "string",
                                            "value": "Happened At"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "target": {
                                    "type": "variable",
                                    "value": "Venue",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "class"
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "childrenType": "operand"
                    }
                  ],
                  "annotations": [
                    {
                      "type": "annotation",
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
                  "childrenType": "content",
                  "children": [
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "expression",
                          "operator": "or",
                          "children": [
                            {
                              "type": "variable",
                              "value": "Event.Loss",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "Loss",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Loss"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "variable",
                              "value": "Event.Theft",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Event",
                                "key": "Theft",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Theft"
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "type": "variable",
                              "value": "Event.SevereDamage",
                              "class": "scopeVariable"
                            }
                          ],
                          "childrenType": "operand"
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "variable",
                              "value": "InsuredMarquee",
                              "class": "namedVariable",
                              "info": {
                                "type": "PhysicalObject"
                              }
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
                      "type": "annotation",
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
              ],
              "childrenType": "operand"
            },
            {
              "type": "block",
              "name": "Situation",
              "properties": {
                "event": {
                  "type": "variable",
                  "value": "Event.Curtailment",
                  "class": "dictionaryValue",
                  "info": {
                    "dictionary": "Event",
                    "key": "Curtailment",
                    "value": {
                      "type": "object",
                      "properties": {
                        "displayName": {
                          "type": "string",
                          "value": "Curtailment"
                        }
                      }
                    }
                  }
                },
                "relation": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "variable",
                      "value": "Relation.HappenTo",
                      "class": "dictionaryValue",
                      "info": {
                        "dictionary": "Relation",
                        "key": "HappenTo",
                        "value": {
                          "type": "object",
                          "properties": {
                            "displayName": {
                              "type": "string",
                              "value": "Happened to"
                            }
                          }
                        }
                      }
                    },
                    "target": {
                      "type": "expression",
                      "operator": "or",
                      "children": [
                        {
                          "type": "variable",
                          "value": "Wedding",
                          "class": "namedVariable",
                          "info": {
                            "type": "Gathering"
                          }
                        },
                        {
                          "type": "variable",
                          "value": "WeddingReception",
                          "class": "namedVariable",
                          "info": {
                            "type": "Gathering"
                          }
                        }
                      ],
                      "childrenType": "operand"
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
                  "value": "Event.IrrecoverableCosts",
                  "class": "scopeVariable"
                },
                "relation": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "variable",
                      "value": "Relation.IncurredBy",
                      "class": "dictionaryValue",
                      "info": {
                        "dictionary": "Relation",
                        "key": "IncurredBy",
                        "value": {
                          "type": "object",
                          "properties": {
                            "displayName": {
                              "type": "string",
                              "value": "Incurred By"
                            }
                          }
                        }
                      }
                    },
                    "target": {
                      "type": "variable",
                      "value": "PolicyHolder",
                      "class": "namedVariable",
                      "info": {
                        "type": "alias"
                      }
                    }
                  }
                }
              }
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
                          "value": "Event.IntentionToReplan",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "IntentionToReplan",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Clear intention to replan"
                                }
                              }
                            }
                          }
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.HappenTo",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "HappenTo",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Happened to"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "expression",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  }
                                ],
                                "childrenType": "operand"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.By",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "By",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "By"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "variable",
                                "value": "PolicyHolder",
                                "class": "namedVariable",
                                "info": {
                                  "type": "alias"
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "block",
                      "chainOperator": {
                        "type": "block_operator",
                        "operator": "previous"
                      },
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "variable",
                          "value": "Event.Death",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "Death",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Death"
                                }
                              }
                            }
                          }
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "variable",
                              "value": "PolicyHolder",
                              "class": "namedVariable",
                              "info": {
                                "type": "alias"
                              }
                            }
                          }
                        }
                      }
                    }
                  ],
                  "childrenType": "operand"
                }
              ],
              "childrenType": "content",
              "annotations": [
                {
                  "type": "annotation",
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
          ],
          "childrenType": "operand"
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "## Part II - Curtailment\nWe will pay up to the amount shown in the schedule in total for any irrecoverable costs you unavoidably incur in the event of curtailment of the wedding or wedding reception for the following reasons."
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "variable",
              "value": "InsuredSum",
              "class": "namedVariable",
              "info": {
                "type": "Amount"
              }
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
                      "value": "Relation.UnavoidablyIncurBy",
                      "class": "scopeVariable"
                    },
                    "target": {
                      "type": "variable",
                      "value": "PolicyHolder",
                      "class": "namedVariable",
                      "info": {
                        "type": "alias"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    "Rearrangement": {
      "type": "chain",
      "childrenType": "content",
      "children": [
        {
          "type": "operation",
          "operator": "or",
          "children": [
            {
              "type": "logic_block",
              "name": "Cancellation",
              "childrenType": "content",
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
                          "childrenType": "content",
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
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Event.FinancialFailure",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "FinancialFailure",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "financial failure"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Bankruptcy",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Bankruptcy",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "bankruptcy"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Liquidation",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Liquidation",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "liquidation"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Administration",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Administration",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "administration"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenTo",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenTo",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened to"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "alias"
                                              }
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
                                                  "type": "expression",
                                                  "operator": "or",
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.Fire",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "Fire",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Fire"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.NaturalCatastrophe",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "NaturalCatastrophe",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "natural catastrophe"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.AdverseWeather",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "AdverseWeather",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "adverse weather"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "childrenType": "operand"
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "variable",
                                                  "value": "Event.Damage",
                                                  "class": "dictionaryValue",
                                                  "info": {
                                                    "dictionary": "Event",
                                                    "key": "Damage",
                                                    "value": {
                                                      "type": "object",
                                                      "properties": {
                                                        "displayName": {
                                                          "type": "string",
                                                          "value": "Damage"
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "variable",
                                                      "value": "Relation.HappenTo",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Relation",
                                                        "key": "HappenTo",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Happened to"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "BookedVenue",
                                                      "class": "namedVariable",
                                                      "info": {
                                                        "type": "alias"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      ],
                                      "childrenType": "content",
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
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Event.Murder",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Murder",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Murder"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Death",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Death",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Death"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Event.Suicide",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Event",
                                                "key": "Suicide",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Suicide"
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenAt",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenAt",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened At"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "alias"
                                              }
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
                                          "value": "Event.ActOfTerrorism",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "ActOfTerrorism",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Act of terrorism"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenAt",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenAt",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened At"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "BookedVenue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "alias"
                                              }
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
                                          "value": "Event.Closure",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Closure",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Closure"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "value": "Relation.HappenTo",
                                                "class": "dictionaryValue",
                                                "info": {
                                                  "dictionary": "Relation",
                                                  "key": "HappenTo",
                                                  "value": {
                                                    "type": "object",
                                                    "properties": {
                                                      "displayName": {
                                                        "type": "string",
                                                        "value": "Happened to"
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "BookedVenue",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "alias"
                                                }
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "value": "Relation.CausedBy",
                                                "class": "dictionaryValue",
                                                "info": {
                                                  "dictionary": "Relation",
                                                  "key": "CausedBy",
                                                  "value": {
                                                    "type": "object",
                                                    "properties": {
                                                      "displayName": {
                                                        "type": "string",
                                                        "value": "Caused by"
                                                      }
                                                    }
                                                  }
                                                }
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
                                  ],
                                  "childrenType": "operand"
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "variable",
                                      "value": "Event.UnableToHoldGathering",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "UnableToHoldGathering",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "unable to hold gathering"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.By",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "By",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "By"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "BookedVenue",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "alias"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.HappenTo",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "HappenTo",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "Happened to"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "expression",
                                            "operator": "or",
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "Gathering"
                                                }
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "Gathering"
                                                }
                                              }
                                            ],
                                            "childrenType": "operand"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                      "type": "expression",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "variable",
                                          "value": "Event.Death",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Death",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Death"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "variable",
                                          "value": "Event.Injury",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Injury",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Injury"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "variable",
                                          "value": "Event.Sickness",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Sickness",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Sickness"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "childrenType": "operand"
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "value": "Relation.HappenTo",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Relation",
                                            "key": "HappenTo",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Happened to"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "target": {
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Spouse1",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Person"
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "Spouse2",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Person"
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
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
                                      "value": "Event.InapropriateCircumpstance",
                                      "class": "scopeVariable"
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "value": "Relation.HappenTo",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Relation",
                                            "key": "HappenTo",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Happened to"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "target": {
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Gathering"
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Gathering"
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                      "value": "Event.NoShow",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "NoShow",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "No show"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "value": "Relation.CausedBy",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Relation",
                                            "key": "CausedBy",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Caused by"
                                                }
                                              }
                                            }
                                          }
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
                                      "type": "expression",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "variable",
                                          "value": "Event.ImpossibleContinuationOfEvent",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "ImpossibleContinuationOfEvent",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Impossible Continuation of Event"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "variable",
                                          "value": "Event.ImpossibleHappeningOfEvent",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "ImpossibleHappeningOfEvent",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Impossible Happening of Event"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "childrenType": "operand"
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "value": "Relation.HappenTo",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Relation",
                                            "key": "HappenTo",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Happened to"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "target": {
                                          "type": "expression",
                                          "operator": "or",
                                          "children": [
                                            {
                                              "type": "variable",
                                              "value": "Wedding",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Gathering"
                                              }
                                            },
                                            {
                                              "type": "variable",
                                              "value": "WeddingReception",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "Gathering"
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                      "value": "Event.PolicyPurchase",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "PolicyPurchase",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Policy Purchase"
                                            }
                                          }
                                        }
                                      }
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
                                      "value": "Event.NotificationOfLossOfJob",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "NotificationOfLossOfJob",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Notification of loss of job"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relation": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "variable",
                                          "value": "Relation.HappenTo",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Relation",
                                            "key": "HappenTo",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Happened to"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "target": {
                                          "type": "variable",
                                          "value": "PolicyHolder",
                                          "class": "namedVariable",
                                          "info": {
                                            "type": "alias"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "expression",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "variable",
                                          "value": "Spouse1",
                                          "class": "namedVariable",
                                          "info": {
                                            "type": "Person"
                                          }
                                        },
                                        {
                                          "type": "variable",
                                          "value": "Spouse2",
                                          "class": "namedVariable",
                                          "info": {
                                            "type": "Person"
                                          }
                                        },
                                        {
                                          "type": "string",
                                          "value": "couple close relative"
                                        }
                                      ],
                                      "childrenType": "operand"
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "value": "Event.NoShow",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "NoShow",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "No show"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.CausedBy",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "CausedBy",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Caused by"
                                            }
                                          }
                                        }
                                      }
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
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                      "type": "expression",
                                      "operator": "or",
                                      "children": [
                                        {
                                          "type": "variable",
                                          "value": "Event.AdverseWeather",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "AdverseWeather",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "adverse weather"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "variable",
                                          "value": "Event.NaturalCatastrophe",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "NaturalCatastrophe",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "natural catastrophe"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "childrenType": "operand"
                                    }
                                  }
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "variable",
                                      "value": "Event.InabilityToReachPlace",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "InabilityToReachPlace",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Inability to reach a place"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.HappenTo",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "HappenTo",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "Happened to"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "expression",
                                            "operator": "or",
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "PolicyHolder",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "alias"
                                                }
                                              },
                                              {
                                                "type": "string",
                                                "value": "more than 50% of Wedding.guests.count"
                                              }
                                            ],
                                            "childrenType": "operand"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.HappenAt",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "HappenAt",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "Happened At"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "BookedVenue",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "alias"
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Event.Loss",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Loss",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Loss"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Theft",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Theft",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Theft"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "InsuredMarquee",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "PhysicalObject"
                                      }
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
                              "type": "annotation",
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
                      ],
                      "childrenType": "operand"
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "variable",
                          "value": "Event.UnavoidableCancellation",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "UnavoidableCancellation",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Unavoidable cancellation"
                                }
                              }
                            }
                          }
                        },
                        "relation": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.HappenTo",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "HappenTo",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Happened to"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "expression",
                                "operator": "or",
                                "children": [
                                  {
                                    "type": "variable",
                                    "value": "Wedding",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  },
                                  {
                                    "type": "variable",
                                    "value": "WeddingReception",
                                    "class": "namedVariable",
                                    "info": {
                                      "type": "Gathering"
                                    }
                                  }
                                ],
                                "childrenType": "operand"
                              }
                            }
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "variable",
                                "value": "Relation.CausedBy",
                                "class": "dictionaryValue",
                                "info": {
                                  "dictionary": "Relation",
                                  "key": "CausedBy",
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "displayName": {
                                        "type": "string",
                                        "value": "Caused by"
                                      }
                                    }
                                  }
                                }
                              },
                              "target": {
                                "type": "variable",
                                "value": "PolicyHolder",
                                "class": "namedVariable",
                                "info": {
                                  "type": "alias"
                                }
                              }
                            }
                          }
                        ]
                      }
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
                                  "value": "Event.IntentionToReplan",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "IntentionToReplan",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Clear intention to replan"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenTo",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenTo",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened to"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "expression",
                                        "operator": "or",
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "Wedding",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          },
                                          {
                                            "type": "variable",
                                            "value": "WeddingReception",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          }
                                        ],
                                        "childrenType": "operand"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.By",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "By",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "By"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "variable",
                                        "value": "PolicyHolder",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "alias"
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "block",
                              "chainOperator": {
                                "type": "block_operator",
                                "operator": "previous"
                              },
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "value": "Event.Death",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Death",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Death"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "PolicyHolder",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "alias"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "childrenType": "operand"
                        }
                      ],
                      "childrenType": "content",
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
                  ],
                  "childrenType": "operand"
                }
              ],
              "isChainCall": "Cancellation"
            },
            {
              "type": "logic_block",
              "name": "Curtailment",
              "childrenType": "content",
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
                          "childrenType": "content",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Event.death",
                                      "class": "scopeVariable"
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.injury",
                                      "class": "scopeVariable"
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.SeriousSickness",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "SeriousSickness",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Serious Sickness"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "childrenType": "operand"
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenTo",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenTo",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened to"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "expression",
                                        "operator": "or",
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "PolicyHolder",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "alias"
                                            }
                                          },
                                          {
                                            "type": "string",
                                            "value": "couple close relative"
                                          }
                                        ],
                                        "childrenType": "operand"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenAt",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenAt",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened At"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "expression",
                                        "operator": "or",
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "Wedding",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          },
                                          {
                                            "type": "variable",
                                            "value": "WeddingReception",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          }
                                        ],
                                        "childrenType": "operand"
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
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
                                                  "type": "expression",
                                                  "operator": "or",
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.NaturalCatastrophe",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "NaturalCatastrophe",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "natural catastrophe"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.AdverseWeather",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "AdverseWeather",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "adverse weather"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "childrenType": "operand"
                                                }
                                              }
                                            },
                                            {
                                              "type": "block",
                                              "name": "Situation",
                                              "properties": {
                                                "event": {
                                                  "type": "variable",
                                                  "value": "Event.Damage",
                                                  "class": "dictionaryValue",
                                                  "info": {
                                                    "dictionary": "Event",
                                                    "key": "Damage",
                                                    "value": {
                                                      "type": "object",
                                                      "properties": {
                                                        "displayName": {
                                                          "type": "string",
                                                          "value": "Damage"
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "variable",
                                                      "value": "Relation.HappendTo",
                                                      "class": "scopeVariable"
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "Venue",
                                                      "class": "namedVariable",
                                                      "info": {
                                                        "type": "class"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      ],
                                      "childrenType": "content"
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
                                                  "type": "expression",
                                                  "operator": "or",
                                                  "children": [
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.Fire",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "Fire",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Fire"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.Death",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "Death",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Death"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.Suicide",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "Suicide",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Suicide"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    {
                                                      "type": "variable",
                                                      "value": "Event.Fire",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Event",
                                                        "key": "Fire",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Fire"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "childrenType": "operand"
                                                },
                                                "relation": {
                                                  "type": "object",
                                                  "properties": {
                                                    "type": {
                                                      "type": "variable",
                                                      "value": "Relation.HappenAt",
                                                      "class": "dictionaryValue",
                                                      "info": {
                                                        "dictionary": "Relation",
                                                        "key": "HappenAt",
                                                        "value": {
                                                          "type": "object",
                                                          "properties": {
                                                            "displayName": {
                                                              "type": "string",
                                                              "value": "Happened At"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "target": {
                                                      "type": "variable",
                                                      "value": "Venue",
                                                      "class": "namedVariable",
                                                      "info": {
                                                        "type": "class"
                                                      }
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
                                                  "value": "Event.Evacuation",
                                                  "class": "dictionaryValue",
                                                  "info": {
                                                    "dictionary": "Event",
                                                    "key": "Evacuation",
                                                    "value": {
                                                      "type": "object",
                                                      "properties": {
                                                        "displayName": {
                                                          "type": "string",
                                                          "value": "Evacuation"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "childrenType": "operand"
                                        }
                                      ],
                                      "childrenType": "content"
                                    },
                                    {
                                      "type": "block",
                                      "name": "Situation",
                                      "properties": {
                                        "event": {
                                          "type": "variable",
                                          "value": "Event.ActOfTerrorism",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "ActOfTerrorism",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Act of terrorism"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "variable",
                                              "value": "Relation.HappenAt",
                                              "class": "dictionaryValue",
                                              "info": {
                                                "dictionary": "Relation",
                                                "key": "HappenAt",
                                                "value": {
                                                  "type": "object",
                                                  "properties": {
                                                    "displayName": {
                                                      "type": "string",
                                                      "value": "Happened At"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "target": {
                                              "type": "variable",
                                              "value": "Venue",
                                              "class": "namedVariable",
                                              "info": {
                                                "type": "class"
                                              }
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
                                          "value": "Event.Closure",
                                          "class": "dictionaryValue",
                                          "info": {
                                            "dictionary": "Event",
                                            "key": "Closure",
                                            "value": {
                                              "type": "object",
                                              "properties": {
                                                "displayName": {
                                                  "type": "string",
                                                  "value": "Closure"
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "relation": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "value": "Relation.HappenTo",
                                                "class": "dictionaryValue",
                                                "info": {
                                                  "dictionary": "Relation",
                                                  "key": "HappenTo",
                                                  "value": {
                                                    "type": "object",
                                                    "properties": {
                                                      "displayName": {
                                                        "type": "string",
                                                        "value": "Happened to"
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "target": {
                                                "type": "variable",
                                                "value": "Venue",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "class"
                                                }
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "variable",
                                                "value": "Relation.CausedBy",
                                                "class": "dictionaryValue",
                                                "info": {
                                                  "dictionary": "Relation",
                                                  "key": "CausedBy",
                                                  "value": {
                                                    "type": "object",
                                                    "properties": {
                                                      "displayName": {
                                                        "type": "string",
                                                        "value": "Caused by"
                                                      }
                                                    }
                                                  }
                                                }
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
                                  ],
                                  "childrenType": "operand"
                                },
                                {
                                  "type": "block",
                                  "name": "Situation",
                                  "properties": {
                                    "event": {
                                      "type": "variable",
                                      "value": "Event.UnableToHoldGathering",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "UnableToHoldGathering",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "unable to hold gathering"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "relation": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.HappenTo",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "HappenTo",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "Happened to"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "expression",
                                            "operator": "or",
                                            "children": [
                                              {
                                                "type": "variable",
                                                "value": "Wedding",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "Gathering"
                                                }
                                              },
                                              {
                                                "type": "variable",
                                                "value": "WeddingReception",
                                                "class": "namedVariable",
                                                "info": {
                                                  "type": "Gathering"
                                                }
                                              }
                                            ],
                                            "childrenType": "operand"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "variable",
                                            "value": "Relation.HappenAt",
                                            "class": "dictionaryValue",
                                            "info": {
                                              "dictionary": "Relation",
                                              "key": "HappenAt",
                                              "value": {
                                                "type": "object",
                                                "properties": {
                                                  "displayName": {
                                                    "type": "string",
                                                    "value": "Happened At"
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "target": {
                                            "type": "variable",
                                            "value": "Venue",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "class"
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ],
                              "childrenType": "operand"
                            }
                          ],
                          "annotations": [
                            {
                              "type": "annotation",
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
                          "childrenType": "content",
                          "children": [
                            {
                              "type": "block",
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "expression",
                                  "operator": "or",
                                  "children": [
                                    {
                                      "type": "variable",
                                      "value": "Event.Loss",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Loss",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Loss"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.Theft",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Event",
                                        "key": "Theft",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Theft"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "variable",
                                      "value": "Event.SevereDamage",
                                      "class": "scopeVariable"
                                    }
                                  ],
                                  "childrenType": "operand"
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "InsuredMarquee",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "PhysicalObject"
                                      }
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
                              "type": "annotation",
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
                      ],
                      "childrenType": "operand"
                    },
                    {
                      "type": "block",
                      "name": "Situation",
                      "properties": {
                        "event": {
                          "type": "variable",
                          "value": "Event.Curtailment",
                          "class": "dictionaryValue",
                          "info": {
                            "dictionary": "Event",
                            "key": "Curtailment",
                            "value": {
                              "type": "object",
                              "properties": {
                                "displayName": {
                                  "type": "string",
                                  "value": "Curtailment"
                                }
                              }
                            }
                          }
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.HappenTo",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "HappenTo",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Happened to"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "expression",
                              "operator": "or",
                              "children": [
                                {
                                  "type": "variable",
                                  "value": "Wedding",
                                  "class": "namedVariable",
                                  "info": {
                                    "type": "Gathering"
                                  }
                                },
                                {
                                  "type": "variable",
                                  "value": "WeddingReception",
                                  "class": "namedVariable",
                                  "info": {
                                    "type": "Gathering"
                                  }
                                }
                              ],
                              "childrenType": "operand"
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
                          "value": "Event.IrrecoverableCosts",
                          "class": "scopeVariable"
                        },
                        "relation": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "variable",
                              "value": "Relation.IncurredBy",
                              "class": "dictionaryValue",
                              "info": {
                                "dictionary": "Relation",
                                "key": "IncurredBy",
                                "value": {
                                  "type": "object",
                                  "properties": {
                                    "displayName": {
                                      "type": "string",
                                      "value": "Incurred By"
                                    }
                                  }
                                }
                              }
                            },
                            "target": {
                              "type": "variable",
                              "value": "PolicyHolder",
                              "class": "namedVariable",
                              "info": {
                                "type": "alias"
                              }
                            }
                          }
                        }
                      }
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
                                  "value": "Event.IntentionToReplan",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "IntentionToReplan",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Clear intention to replan"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.HappenTo",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "HappenTo",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "Happened to"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "expression",
                                        "operator": "or",
                                        "children": [
                                          {
                                            "type": "variable",
                                            "value": "Wedding",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          },
                                          {
                                            "type": "variable",
                                            "value": "WeddingReception",
                                            "class": "namedVariable",
                                            "info": {
                                              "type": "Gathering"
                                            }
                                          }
                                        ],
                                        "childrenType": "operand"
                                      }
                                    }
                                  },
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "variable",
                                        "value": "Relation.By",
                                        "class": "dictionaryValue",
                                        "info": {
                                          "dictionary": "Relation",
                                          "key": "By",
                                          "value": {
                                            "type": "object",
                                            "properties": {
                                              "displayName": {
                                                "type": "string",
                                                "value": "By"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "target": {
                                        "type": "variable",
                                        "value": "PolicyHolder",
                                        "class": "namedVariable",
                                        "info": {
                                          "type": "alias"
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "block",
                              "chainOperator": {
                                "type": "block_operator",
                                "operator": "previous"
                              },
                              "name": "Situation",
                              "properties": {
                                "event": {
                                  "type": "variable",
                                  "value": "Event.Death",
                                  "class": "dictionaryValue",
                                  "info": {
                                    "dictionary": "Event",
                                    "key": "Death",
                                    "value": {
                                      "type": "object",
                                      "properties": {
                                        "displayName": {
                                          "type": "string",
                                          "value": "Death"
                                        }
                                      }
                                    }
                                  }
                                },
                                "relation": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "variable",
                                      "value": "Relation.HappenTo",
                                      "class": "dictionaryValue",
                                      "info": {
                                        "dictionary": "Relation",
                                        "key": "HappenTo",
                                        "value": {
                                          "type": "object",
                                          "properties": {
                                            "displayName": {
                                              "type": "string",
                                              "value": "Happened to"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "target": {
                                      "type": "variable",
                                      "value": "PolicyHolder",
                                      "class": "namedVariable",
                                      "info": {
                                        "type": "alias"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "childrenType": "operand"
                        }
                      ],
                      "childrenType": "content",
                      "annotations": [
                        {
                          "type": "annotation",
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
                  ],
                  "childrenType": "operand"
                }
              ],
              "isChainCall": "Curtailment"
            }
          ],
          "childrenType": "operand"
        }
      ],
      "annotations": [
        {
          "type": "annotation",
          "name": "Text",
          "properties": {
            "value": {
              "type": "string",
              "value": "## Part III - Rearrangement\nIn the event of a covered event in Part I or II above, we will reimburse you for reasonable and necessary additional  costs incurred in rearranging the wedding and/or wedding  reception to the same standard as originally booked and budgeted to up to a maximum of 10% of the sum insured."
            }
          }
        },
        {
          "type": "annotation",
          "name": "Payout",
          "properties": {
            "type": {
              "type": "string",
              "value": "Limit"
            },
            "amount": {
              "type": "mathematical_operation",
              "operator": {
                "type": "operator",
                "value": "percentOf"
              },
              "leftOperand": {
                "type": "number",
                "value": "10"
              },
              "rightOperand": {
                "type": "variable",
                "value": "InsuredSum"
              }
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
                        "value": "Relation.IncurBy",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "variable",
                        "value": "PolicyHolder",
                        "class": "namedVariable",
                        "info": {
                          "type": "alias"
                        }
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.IncurFor",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "variable",
                        "value": "Event.Rearrangement",
                        "class": "scopeVariable"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "variable",
                        "value": "Relation.happenTo",
                        "class": "scopeVariable"
                      },
                      "target": {
                        "type": "expression",
                        "operator": "or",
                        "children": [
                          {
                            "type": "variable",
                            "value": "Wedding",
                            "class": "namedVariable",
                            "info": {
                              "type": "Gathering"
                            }
                          },
                          {
                            "type": "variable",
                            "value": "WeddingReception",
                            "class": "namedVariable",
                            "info": {
                              "type": "Gathering"
                            }
                          }
                        ],
                        "childrenType": "operand"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  },
  "rules": {},
  "declarations": {
    "Event": {
      "class": "Dictionary",
      "name": "Event",
      "properties": {
        "UnavoidableCancellation": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Unavoidable cancellation"
            }
          }
        },
        "IntentionToReplan": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Clear intention to replan"
            }
          }
        },
        "Closure": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Closure"
            }
          }
        },
        "ActOfTerrorism": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Act of terrorism"
            }
          }
        },
        "Murder": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Murder"
            }
          }
        },
        "Death": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Death"
            }
          }
        },
        "Injury": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Injury"
            }
          }
        },
        "Sickness": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Sickness"
            }
          }
        },
        "SeriousSickness": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Serious Sickness"
            }
          }
        },
        "Suicide": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Suicide"
            }
          }
        },
        "Fire": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Fire"
            }
          }
        },
        "NaturalCatastrophe": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "natural catastrophe"
            }
          }
        },
        "AdverseWeather": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "adverse weather"
            }
          }
        },
        "Damage": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Damage"
            }
          }
        },
        "FinancialFailure": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "financial failure"
            }
          }
        },
        "Bankruptcy": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "bankruptcy"
            }
          }
        },
        "Liquidation": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "liquidation"
            }
          }
        },
        "Administration": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "administration"
            }
          }
        },
        "UnableToHoldGathering": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "unable to hold gathering"
            }
          }
        },
        "InappropriateCircumstance": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Inappropriate Circumstance"
            }
          }
        },
        "NoShow": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "No show"
            }
          }
        },
        "ImpossibleContinuationOfEvent": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Impossible Continuation of Event"
            }
          }
        },
        "ImpossibleHappeningOfEvent": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Impossible Happening of Event"
            }
          }
        },
        "PolicyPurchase": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Policy Purchase"
            }
          }
        },
        "NotificationOfLossOfJob": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Notification of loss of job"
            }
          }
        },
        "Loss": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Loss"
            }
          }
        },
        "Theft": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Theft"
            }
          }
        },
        "InabilityToReachPlace": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Inability to reach a place"
            }
          }
        },
        "Curtailment": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Curtailment"
            }
          }
        },
        "Evacuation": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Evacuation"
            }
          }
        }
      }
    },
    "Relation": {
      "class": "Dictionary",
      "name": "Relation",
      "properties": {
        "HappenTo": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Happened to"
            }
          }
        },
        "HappenAt": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Happened At"
            }
          }
        },
        "CausedBy": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Caused by"
            }
          }
        },
        "By": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "By"
            }
          }
        },
        "IncurredBy": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "value": "Incurred By"
            }
          }
        }
      }
    },
    "Situation": {
      "class": "class",
      "name": "Situation",
      "properties": {
        "event": {
          "type": "object",
          "properties": {
            "ask": {
              "type": "object",
              "properties": {
                "en": {
                  "type": "string",
                  "value": "What happened?"
                }
              }
            },
            "dictionary": {
              "type": "variable",
              "value": "Event"
            },
            "type": {
              "type": "variable",
              "value": "Enum"
            }
          }
        },
        "location": {
          "type": "object",
          "properties": {
            "ask": {
              "type": "object",
              "properties": {
                "en": {
                  "type": "string",
                  "value": "Where did it happen?"
                }
              }
            }
          }
        }
      }
    },
    "Person": {
      "class": "class",
      "name": "Person",
      "properties": false
    },
    "Venue": {
      "class": "class",
      "name": "Venue",
      "properties": false
    },
    "Gathering": {
      "class": "class",
      "name": "Gathering",
      "properties": {
        "venue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "variable",
              "value": "Venue"
            }
          }
        }
      }
    },
    "PhysicalObject": {
      "class": "class",
      "name": "PhysicalObject",
      "properties": false
    },
    "Amount": {
      "class": "class",
      "name": "Amount",
      "properties": false
    },
    "Spouse1": {
      "class": "Person",
      "name": "Spouse1"
    },
    "Spouse2": {
      "class": "Person",
      "name": "Spouse2"
    },
    "PolicyHolder": {
      "class": "alias",
      "name": "PolicyHolder",
      "properties": {
        "is": [
          {
            "type": "variable",
            "value": "Spouse1"
          },
          {
            "type": "variable",
            "value": "Spouse2"
          }
        ]
      }
    },
    "Wedding": {
      "class": "Gathering",
      "name": "Wedding"
    },
    "WeddingReception": {
      "class": "Gathering",
      "name": "WeddingReception"
    },
    "BookedVenue": {
      "class": "alias",
      "name": "BookedVenue",
      "properties": {
        "is": [
          {
            "type": "variable",
            "value": "Wedding.venue"
          },
          {
            "type": "variable",
            "value": "WeddingReception.venue"
          }
        ]
      }
    },
    "InsuredMarquee": {
      "class": "PhysicalObject",
      "name": "InsuredMarquee"
    },
    "InsuredSum": {
      "class": "Amount",
      "name": "InsuredSum"
    }
  }
}
