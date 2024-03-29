

Chain Section1_notCover() {

  ::Payout {
    type: "Exclusion"
  }

  ::Text {
     value: "This section does not cover:"
  }

   Section1() && 
   (
    LossRecoverableFromOtherSource()
    || 
    lossExcludedInTheGeneralExclusion()
    ||
    lossExcludedFromDivers()
  )
}

Rule LossRecoverableFromOtherSource() {
  ::Text {
    value: "1. losses recoverable from any other sources;"
  }

    Situation {
      event: Event.Loss
    }
  -->
    Situation {
      event: Event.LossRecoverableFromOtherSource
    }

}

Rule lossExcludedInTheGeneralExclusion() {
  ::Text {
    value: "2. losses excluded in the General Exclusions;"
  }
  // ??  
  //GeneralExclusion()
}

Rule lossExcludedFromDivers() { 
  
  ::Text {
    value : "3. any claim arising directly or indirectly from:"
  }

  Situation {
    relation: {
      type: Relation.CausedBy,
      target: "government regulation" || "government act" || "change of law" || "general government guidance and advice"
    }
  }
  ::Text {
    value : "a) government regulation, government act, change of law or general government guidance and advice;"
  }
/*  ||
  (
    !(
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
        }
      } 
      -->
      Situation {
        event: Event.redundancy,
         relation: {
          type: Relation.QualifyFor,
          target: "payment under redundancy legislation" 
        }
      }
    )
   
    -->
    Situation {
     event: Event.unemployment
    } 
    ::Text {
      value: "b) unemployment other than by redundancy where notice is received atleast 16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation;"
    }
  )
 
  */
  /*
3. any claim arising directly or indirectly from:
a) government regulation, government act, change of law or general government guidance and advice;
b) unemploymentotherthanbyredundancywherenoticeisreceivedatleast16 weeks after date of purchase of this insurance and which qualifies for payment under redundancy legislation;
c) a worsening of your financial circumstances or that of any of your close relatives (excludes redundancy);
d) weddingarrangementsnothonoredbyyouremployer,otherthanasprovidedforin Part 1 (point 5);
e) your disinclination to go through with the marriage as agreed or your failure to comply with any legal requirements or to obtain the relevant legal documentation;
f) failure to notify the provider of any goods or service immediately if it is found necessary to cancel or curtail the wedding or wedding reception;
g) any loss occurring as the result of the wedding services supplier becoming bankrupt, put into liquidation, ceasing to trade or going into administration within 90 days of the purchase of the policy;
h) anylossresultingfromfraudulentoranyothertypeofcriminalactivityonthepartof the wedding services supplier;
i) any loss resulting from the wedding services supplier not performing their contractual obligations unless caused by bankruptcy, liquidation, cessation of trading or insolvency due to financial failure;
*/

}

/*
 
4. travel costs of any kind except those covered under Section 6 – Wedding Cars & transport;
5. accommodation costs for stays in excess of three nights and relating to anyone other than the couple (or married couple in the event of a blessing), their parents or step-parents (including guardians or foster parents) or attendants;
6. additional costs not notified to the White Horse Claims Department and agreed in advance of a rearranged wedding or wedding reception;
7. any claim resulting from pregnancy or childbirth except for related serious medical complications where the expected date of delivery is at least five months after the ceremony date;
8. any claim caused by adverse weather or natural catastrophe where there were warnings of adverse weather or natural catastrophe in the public domain at the time of purchasing this policy;
9. any claim resulting from the death of a close relative more than 3 months before the ceremony date;
10. any claim arising from any illness or medical condition of you or a close relative that was first reported, under investigation and/or diagnosed within 30 days after the date of purchase of this insurance;
11. any claim where the sickness or injury is of a nature that it does not materially affect the day-to-day activities of the person suffering it or where the effects of sickness or injury are mainly cosmetic and do not materially affect your ability to go through with the wedding ceremony and/or attend the wedding reception;
12. losses arising directly or indirectly from any pandemic or epidemic (e.g. COVID-19), including any mutations of such pandemic or epidemic diseases;
13. any claim for items that can be used even though the wedding has been cancelled, curtailed or rearranged;
14. any claim for items such as wedding rings and the costs of personalized items that have been engraved;
15. any claim arising directly or indirectly from cancellation/curtailment or rearrangement of travel and/or accommodation arrangements;
16. any claim for ceremonial attire unless its due to the death of either of the couple.
*/

