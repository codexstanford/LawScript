section Section13 {
  annotation Text {
    value: "SECTION 13: WEDDING STATIONARY"
  }
  annotation Documentation {
    value: "This section covers the reimbursement for loss or damage to Wedding Stationary."
  }

  section LossOrDamage {
    annotation Text {
      value: "We will pay up to the amount shown on Your Schedule for loss or damage to Wedding Stationary due to, accident, fire or theft whilst being stored by You or Your Close Relative."
    }

    Situation {
      event: "LossOrDamage",
      cause: "Accident" or "Fire" or "Theft",
      storage: "You" or "CloseRelative"
    } annotation Reimbursement;
  }

  section PrintingCosts {
    annotation Text {
      value: "Reimbursement for printing costs already paid, in the event that the Wedding is cancelled or rearranged within the terms of Section 1 of the policy. If Your Wedding is rearranged, We will pay for Additional Costs above original budget necessary due to a rearrangement but not exceeding the amount shown on Your Schedule."
    }

    $Section1.Cancellation or $Section1.Rearrangement annotation PrintingCostsReimbursement;
  }

  section CoverEnds {
    annotation Text {
      value: "Cover finishes on the completion of the Wedding and Wedding Reception or when a claim is made under this Section, whichever occurs first."
    }

    Situation {
      event: "WeddingCompletion" or "WeddingReceptionCompletion" or "ClaimMade"
    } annotation CoverEnds;
  }

  section Exclusions {
    annotation Text {
      value: "This section of the policy does not include:"
    }

    section Excess {
      annotation Text {
        value: "a. the excess as shown on Your Schedule of insurance."
      }

      Situation {
        event: "Excess"
      } annotation Exclusion;
    }

    section LossNotReported {
      annotation Text {
        value: "b. any loss (other than by damage) not reported to the police within 24 hours of discovery."
      }

      Situation {
        event: "LossNotReported"
      } annotation Exclusion;
    }

    section OtherwiseInsured {
      annotation Text {
        value: "c. loss or damage which is or but for the existence of this policy would be otherwise Insured."
      }

      Situation {
        event: "OtherwiseInsured"
      } annotation Exclusion;
    }

    section UnattendedVehicle {
      annotation Text {
        value: "d. loss or damage by theft or attempted theft of any Wedding Stationary left in any unattended vehicle, unless the property is left in the locked boot or locked glove compartment of a motor vehicle, concealed from view and there is evidence of violent, visible and forcible entry thereto."
      }

      Situation {
        event: "TheftOrAttemptedTheft",
        location: "UnattendedVehicle",
        condition: "NotLockedBootOrGloveCompartment" or "NotConcealedFromView" or "NoForcibleEntry"
      } annotation Exclusion;
    }

    section HomeOrVenue {
      annotation Text {
        value: "e. loss or damage by theft or attempted theft of any Wedding Gifts left in the Home or ceremony venue or Wedding Reception venue, unless there is evidence of forcible and violent entry to the Home."
      }

      Situation {
        event: "TheftOrAttemptedTheft",
        location: "Home" or "CeremonyVenue" or "WeddingReceptionVenue",
        condition: "NoForcibleAndViolentEntry"
      } annotation Exclusion;
    }

    section Section1Exclusion {
      annotation Text {
        value: "f. Any loss excluded under Section 1 of this policy."
      }

      $Section1.Exclusions annotation Exclusion;
    }

    section GeneralExclusions {
      annotation Text {
        value: "g. General Exclusions as detailed on page 12."
      }

      Situation {
        event: "GeneralExclusions"
      } annotation Exclusion;
    }
  }
}