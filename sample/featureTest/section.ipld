



@SectionA {



    ::Payout {
      test : "olala"
    }

    Situation {
      event: "Test"
    }
    --> 
    Situation {
      event: "Fire"
    };
  

     ::Payout {
      test : "C"
    }

    Situation {
      event: "D"
    }
    --> 
    Situation {
      event: "E"
    };
}

@SectionB {


    ::Exclusion {}

    SectionA() &&
    (
      Situation {
        event : "test1"
      }
      --> 
      Situation {
        event : "test2"
      }
    );

  


}