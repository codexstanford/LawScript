include "./ontology/dictionary-Country.LawScript";


Person: {};

PhysicalObject: {
  length: number,
  width: number,
  height: number,
  weight: number
};

/*8. Vehicles 
Vehicle means the private car or motorcycle which is less than 16 years old and which is: 
no longer than 5.5 meters including tow bar;
no heavier than 3,500 kilograms; 
no higher than 3 meters; 
and 	no wider than 2.3 meters including wing mirrors; 
not used for commercial purposes;
*/

Vehicle: PhysicalObject && {
  age: number,
  usedForCommercialPurpose: boolean
};

// UK, which is Great Britain, Northern Ireland, the Isle of Man and the Channel Islands."
UK = Country.GBR || Country.IMN || Country.GSY;

InsuredVehicle: Vehicle;
PolicyHolder: Person;

::Ought {
  InsuredVehicle.length : {
     type: "lowerThan",
     value: 5.5
  },
  InsuredVehicle.weight : {
     type: "lowerThan",
     value: 3500
  },
  InsuredVehicle.height: {
    type: "lowerThan",
    value: 3
  },
  InsuredVehicle.width: {
    type: "lowerThan",
    value: 2.3
  },
  InsuredVehicle.age: {
    type: "lowerThan",
    value: 16
  },
  InsuredVehicle.usedForCommercialPurpose: {
    type: "equal",
    value: false
  }
}


::Ought {
  Situation.location: {
    type: "equals",
    value: UK
  }
}

Chain TerritorialLimits() {
  ::Text {
    value: "11. Territorial limits 
UK, which is Great Britain, Northern Ireland, the Isle of Man and the Channel Islands."
  }

  ::OutOfCover {
  }

 Situation {
    location: {
      country: !UK
    }
  }



}

