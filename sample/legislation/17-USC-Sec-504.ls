
CopyrightOwner : {}
section 17-USC-Sec.504 {
  annotation Text {
    value: "#17 USC Sec. 504"
  }

  section c {
    annotation Text {
      value: "(c) Statutory Damages."
    }


    section 1 {
      annotation Text {
        value: "the copyright owner
  may elect, at any time before final judgement is rendered, to recover, instead of
  actual damages and profits, an award of statutory damages for all infringements
  involved in the action, with respect to any one work, for which any one infringer
  is liable individually, or for which any two or more infringers are liable jointly
  and severally, in a sum of not less than $250 or more than $10,000 as the court
  considers just. For the purposes of this subsection, all the parts of a compilation
  or derivative work constitute one work."
      }
      
      annotation Payout {
        type: "Recover"
        electBy: CopyrightOwner,
        what: "Award of statutory damages",
        for: {

        }
      }
    
      !§2 annotation Text {
        value: "(1) Except as provided by clause (2) of this subsection,"
      }
      && (
        Situation {
          event: "Elect",
          who: CopyrightOwner,
        } 
      before
        Situation {
          event: "Final Judgement render"
        } 
      )
      !annotation Payout {
        type: "damages and profits"
      }
 !annotation Payout {
        type: "damages and profits"
      }
      annotation Text {
        value: "the copyright owner may elect, at any time before final judgement is rendered, to recover, instead of actual damages and profits, an award of statutory damages for all infringements involved in the action, with respect to any one work, for which any one infringer is liable individually, or for which any two or more infringers are liable jointly"
      }

   
    }

    section 2 {
      /*

(2) In a case where the copyright owner sustains the burden of proving, and the
court finds that infringement was committed willfully, the court in its discretion
may increase the award of statutory damages to a sum of not more than $50,000.
In a case where the infringer sustains the burden of proving, and the court finds,
that such infringer was not aware and had no reason to believe that his or her
acts constituted an infringement of copyright, the court in its discretion may
reduce the award of statutory damages to a sum of not less than $100.
      */
    }
  }
}

