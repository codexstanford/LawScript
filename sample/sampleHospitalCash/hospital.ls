

Policy : {
  isSigned: boolean,
  isPremiumPayed: boolean,
  isCanceled: boolean
};

PolicyEndDate : date;

@Part1 {
  ::Text { value: " 1.  POLICY IN EFFECT AND CONDITIONS"}

  @Part1.1 {
    ::Text {
      value : "1.1 The payment of any benefit under this policy is conditioned on the policy being in effect at the time of the hospitalization for sickness or accidental injury on which the claim for such benefit is premised.  The policy will be in effect if:"
    }
    ::PayementOfBenefitsAllowed{} 
    ::!PayementOfBenefitsNotAllowed{}

    Situation {
      event: "Sickness" || "Accidental injury"
    }
    && 
    Policy.isSigned ::Text {value : "(a) This agreement is signed,"}
    && 
    Policy.isPremiumPayed ::Text {value: "(b) The applicable premium for the policy period has been paid, and"}
    &&
    §Part1.3 ::Text {value: "(c) The condition set out in Section 1.3 is still pending or has been satisfied in a timely fashion, and"}
    &&
    !Policy.isCanceled ::Text{value: "(d) The policy has not been canceled."};
  }

  @Part1.2 {
    ::Text{
      value: "1.2 Cancellation will be deemed to have occurred if there is fraud, or any misrepresentation or material withholding of in any information provided by you to the Company in connection with any communication or information relating to this policy, or if the condition set out in Section 1.3 has not be satisfied in a timely fashion. "
    }

    ::Cancellation{ }
    Situation {
      event: Event.Fraud || Event.Misrepresentation || Event.MaterialWitholding,
      relation: [
        {
          type: Relation.HappenTo,
          target: informationProvidedToTheCompany
        },
        {
          type: Relation.RelatedTo,
          target: thisPolicy
        }
      ]
    } || §Part1.3;

    ::Text { value: "It will also be automatically canceled at midnight, US Eastern time then in effect, on the last day of the policy term described in Section 5 below." };
    ::Cancellation{ }
    Time {
      time: 12,
      timeZone: "EST",
      day: PolicyEndDate
    };
  }

  @Part1.3 {
    ::Text {
      value: "1.3 No later than the 7th month anniversary of the effective date of this policy, you will supply us with written confirmation from the medical provider in question of a wellness visit for yourself with a qualified medical provider occurring no later than the 6th month anniversary of the effective date of this policy."
    } 

    Situation {
      event: Event.SupplyDocument,
      relation: [ 
        {
          type: Relation.from,
          target: PolicyHolder
        },
        {
          type: Relation.to,
          target: Insurer
        },
        {
          type: Relation.authorBy,
          target: "qualified medical provider"
        },
        {
          type: Relation.documentContent,
          target: "confirmation of wellness visit"
        },
        {
          type: Relation.documentConcern,
          target: PolicyHolder
        },
        {
          type: Relation.authorDate,
          target: [... (Policy.effectiveDate + 6 * Time.Month)=]
        }
      ]
    }
    ==>
    Time {
      date: Policy.effectiveDate + 7 * Time.Month
    };
  }

 

}


/* 

2.  BENEFITS
2.1 If you have been confined in a hospital as a result of sickness or accidental Injury, we will pay you the Daily Hospital Income Benefit shown in Section 5 below.
2.2 The Daily Hospital Income Benefit will only be payable for each (24 hour) day of continuous confinement in a hospital in the United States, from the first day of confinement and for a period not exceeding three hundred and sixty-five (365) days for all such confinement due to sickness or accidental Injury.
2.3 To trigger any benefit, a claim must be made to the Company setting out the basis for making the claim and for there being no exclusion or cancelation.

3 GENERAL EXCLUSIONS
3.1 Your policy will not apply to, and no benefit will be paid with respect to, any event causing sickness or accidental injury arising directly or indirectly out of:
(a) Skydiving; or
(b) Service in the military; or
(c) Service as a fire fighter; or
(d) Service in the police; or
(e) If your age at the time of the hospitalization is equal to or greater than 75 years of age

4. GENERAL CONDITIONS
4.1 Where does Your Policy apply?
4.1.1 Your Policy insures You twenty-four (24) hours a day anywhere in the world.
4.2 Arbitration
4.2.1 If any dispute or disagreement arises regarding any matter pertaining to or concerning this Policy, the dispute or disagreement must be referred to arbitration in accordance with the provisions of the Arbitration Act (Cap. 10) and any statutory modification or re-enactment thereof then in force, such arbitration to be commenced within three (3) months from the day such parties are unable to settle the dispute or difference. If You fail to commence arbitration in accordance with this clause, it is agreed that any cause of action and any right to make a claim that You have or may have against Us shall be extinguished completely. Where there is a dispute or disagreement, the issuance of a valid arbitration award shall also be a condition precedent to our liability under this Policy.
In no case shall You seek to recover on this Policy before the expiration of sixty (60) days after written proof of claim has been submitted to Us in accordance with the provisions of this Policy.
4.3 Laws of New York
4.3.1 Your Policy is governed by the laws of New York.
4.4 US Currency
4.4.1 All payments by You to Us and by Us to You or someone else under your policy must be in Unitied States currency.
4.5 Premium
4.5.1 The premium described in Section 5 below shall be paid in one lump sum at the signing of the policy.
4.6 Policy Term
The term of this policy will begin on the date accepted by Us as signified by our signature of the policy (the effective date) and will last for a period of one year from that date, unless previously canceled pursuant to Section 1 above.
5. BENEFIT AND PREMIUM AMOUNTS
5.1 The Daily Hospital Benefit amount under this policy is $500.
5.2 The premium amount for the policy is $2,000.

6. SIGNATURE
Please indicate your agreement by signing on the line designated below and returning this to us with your check for the premium.

*/