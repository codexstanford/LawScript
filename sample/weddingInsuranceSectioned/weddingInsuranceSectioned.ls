include "https://raw.githubusercontent.com/codexstanford/LawScript/main/sample/ontology/dictionary-Event.ls";
include "../ontology/dictionary-ObjectRelation.ls";
include "../ontology/Situation.ls";


Person : {};
Venue : {};
Gathering :{
  venue : Venue 
};

PhysicalObject: {};

Amount : {};


// this are specifics definitions
Spouse1 : Person;
Spouse2 : Person;

// how to do alliases
PolicyHolder = Spouse1 || Spouse2;

Wedding :Gathering; 
WeddingReception :Gathering;

BookedVenue = Wedding.venue || WeddingReception.venue;

InsuredMarquee :PhysicalObject;
InsuredSum :Amount;

WeddingSupplier :Company;
 


include "./section1.ls";


