"use strict";
const superheroData = {
  squadName: "Super Hero Squad",
  homeTown: "Sapele City",
  formed: "1924",
  secretBase: "Super Tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 43,
      secretIdentity: "Duke",
      power: [
        "Radiation Resistence",
        "Flash Speed",
        "Turning Tiny",
        "Radiation Blast",
        "High Energy"
      ]
    },
    {
        "name": "Madame Uppercut",
        "age": 71,
        "secretIdentity": "Osawese Robert",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Martial art",
          "Superhuman reflexes",
          "Mind reading"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 30000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
  ]
};

console.log(superheroData.squadName);
console.log(superheroData["active"]);
console.log(superheroData.members[1].powers);

const squad = [
    {
        squadName: "Super Hero Squad",
        homeTown: "Sapele City",
        formed: "1924",
        secretBase: "Super Tower",
        active: true,
        members: [
          {
            name: "Molecule Man",
            age: 43,
            secretIdentity: "Duke",
            power: [
              "Radiation Resistence",
              "Flash Speed",
              "Turning Tiny",
              "Radiation Blast",
              "High Energy"
            ]
          },
          {
              "name": "Madame Uppercut",
              "age": 71,
              "secretIdentity": "Osawese Robert",
              "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Martial art",
                "Superhuman reflexes",
                "Mind reading"
              ]
            },
            {
              "name": "Eternal Flame",
              "age": 30000,
              "secretIdentity": "Unknown",
              "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
              ]
            }
        ]
      },
]

const naturalElements = [
    {
        naturalElementName: "African Mountains",
        location: "Africa",
        raceOfInhabitants: "Black Africans",
        natural: true,
        elementType: "Solid",
        mountains: [
            {
                mountainName: "kilimanjaro",
                location: "Tanzania",
                feet: 19341,
                age: "1 million years +",
                discoveryTime: "19th century",
                minerals: [
                    "gypsun",
                    "graphite",
                    "quartz",
                ]
            },
            {
                mountainName: "Mount Kenya",
                location: "Kenya",
                feet: 17057,
                age: "2 million years +",
                discoveryTime: 1849,
                minerals: [
                    "gold",
                    "iron ore",
                    "saphire",
                    "rubies"
                ]   
            },
            {
                mountainName: "Mount Elgon",
                location: "Uganda",
                feet: 14177,
                age: "1 million years +",
                discoveryTime: 1890,
                minerals: [
                    "gold",
                    "iron ore",
                    "Lime stone",
                ]   
            },
            {
                mountainName: "Mount Drakensberg",
                location: "South Africa",
                feet: 11420,
                age: "For Several Centuries ago",
                discoveryTime: 1840,
                minerals: [
                    "gold",
                    "coal",
                    "diamonds",
                ]   
            },
            {
                mountainName: "Mount Simien",
                location: "Ethiopia",
                feet: 14928,
                age: "1 million years +",
                discoveryTime: 1789,
                minerals: [
                    "gold",
                    "opals",
              ]   
            }
        ]
      }
]

// console.log(naturalElements[0].naturalElementName);
// console.log(naturalElements[0].location);
// console.log(naturalElements[0].mountains[0].location);
// console.log(naturalElements[0].mountains[1].location);
// console.log(naturalElements[0].mountains[3].age)

console.log(naturalElements[0].mountains[4].minerals[0]);

const requestURL = "naturalElement.json";
