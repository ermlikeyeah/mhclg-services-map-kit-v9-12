module.exports = function (router) {


// ------- START import services data ---------

let PrototypeVersion = 4;

const fs = require('fs');
const fileLocation = './app/views/v' + PrototypeVersion + '/data/services-data.json';

let rawdata = fs.readFileSync(fileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(rawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var numberOfService;
var x;
var counter;
counter = 0;

let nameOfService = [''];
let serviceDescription = [''];
let MHCLGInputDescription = [''];
let endUserNeeds = [''];
let serviceProvider = [''];
let roleOfMHCLG = [''];

let endUser = [''];
let suggestedAlternativeEndUserNeed = [''];
let collatedEndUsers = [''];
let collatedEndUsersNeeds = [''];
let collatedSupportingUsers = [''];
let collatedSupportingUsersNeeds = [''];

let user1 = [''];
let user1Needs = [''];
let user1Type = [''];

let user2 = [''];
let user2Needs = [''];

let user3 = [''];
let user3Needs = [''];

let user4 = [''];
let user4Needs = [''];

let user5 = [''];
let user5Needs = [''];

let user6 = [''];
let user6Needs = [''];

let serviceType = [''];
let serviceMaturity = [''];
let serviceStartDate = [''];
let serviceEndDate = [''];
let servicePatterns =[''];

let servicePhase1 =[''];
let servicePhase1Providers =[''];
let servicePhase2 =[''];
let servicePhase2Providers =[''];
let servicePhase3 =[''];
let servicePhase3Providers =[''];
let servicePhase4 =[''];
let servicePhase4Providers =[''];
let servicePhase5 =[''];
let servicePhase5Providers =[''];
let servicePhase6 =[''];
let servicePhase6Providers =[''];


let departmentalPriority = [''];
let policyPartners = [''];
let policyObjective = [''];
let policyTeam = [''];
let directorate = [''];
let FTE = [''];
let serviceBudget = [''];
let levelOfFunding = [''];
let fundName = [''];
let validatedInformation = [''];

console.log("v4 service-info.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
  serviceDescription.push(obj["records"][counter]["fields"]["Service description"]);
  MHCLGInputDescription.push(obj["records"][counter]["fields"]["MHCLG input description"]);
  endUserNeeds.push(obj["records"][counter]["fields"]["End User Need"]);
  serviceProvider.push(obj["records"][counter]["fields"]["Service Provider"]);
  roleOfMHCLG.push(obj["records"][counter]["fields"]["Role of MHCLG"]);
  endUser.push(obj["records"][counter]["fields"]["End User"]);
  suggestedAlternativeEndUserNeed.push(obj["records"][counter]["fields"]["Suggested Alternative End User Need"]);

  collatedEndUsers.push(obj["records"][counter]["fields"]["Collated end users"]);
  collatedEndUsersNeeds.push(obj["records"][counter]["fields"]["Collated end users needs"]);
  collatedSupportingUsers.push(obj["records"][counter]["fields"]["Collated supporting users"]);
  collatedSupportingUsersNeeds.push(obj["records"][counter]["fields"]["Collated supporting users needs"]);

  user1.push(obj["records"][counter]["fields"]["User 1"]);
  user1Needs.push(obj["records"][counter]["fields"]["User 1 Needs"]);
  user1Type.push(obj["records"][counter]["fields"]["User 1 Type"]);

  user2.push(obj["records"][counter]["fields"]["User 2"]);
  user2Needs.push(obj["records"][counter]["fields"]["User 2 Needs"]);
  user3.push(obj["records"][counter]["fields"]["User 3"]);
  user3Needs.push(obj["records"][counter]["fields"]["User 3 Needs"]);
  user4.push(obj["records"][counter]["fields"]["User 4"]);
  user4Needs.push(obj["records"][counter]["fields"]["User 4 Needs"]);
  user5.push(obj["records"][counter]["fields"]["User 5"]);
  user5Needs.push(obj["records"][counter]["fields"]["User 5 Needs"]);
  user6.push(obj["records"][counter]["fields"]["User 6"]);
  user6Needs.push(obj["records"][counter]["fields"]["User 6 Needs"]);

  serviceType.push(obj["records"][counter]["fields"]["Service Type"]);
  serviceMaturity.push(obj["records"][counter]["fields"]["Service Maturity"]);
  serviceStartDate.push(obj["records"][counter]["fields"]["Service Start Date"]);
  serviceEndDate.push(obj["records"][counter]["fields"]["Service End Date"]);
  servicePatterns.push(obj["records"][counter]["fields"]["Service patterns"]);

  servicePhase1.push(obj["records"][counter]["fields"]["Service phase 1"]);
  servicePhase1Providers.push(obj["records"][counter]["fields"]["Service phase 1 delivery providers"]);

  departmentalPriority.push(obj["records"][counter]["fields"]["Departmental Priority"]);
  policyPartners.push(obj["records"][counter]["fields"]["Policy Partners"]);
  policyObjective.push(obj["records"][counter]["fields"]["Policy Objective"]);
  policyTeam.push(obj["records"][counter]["fields"]["Policy Team"]);
  directorate.push(obj["records"][counter]["fields"]["Policy Group"]);
  FTE.push(obj["records"][counter]["fields"]["FTE"]);
  serviceBudget.push(obj["records"][counter]["fields"]["Service budget"]);

  levelOfFunding.push(obj["records"][counter]["fields"]["Level of Funding"]);
  fundName.push(obj["records"][counter]["fields"]["Fund Name"]);

  validatedInformation.push(obj["records"][counter]["fields"]["Validated information"]);

  console.log(counter + "   " + nameOfService[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import services data ---------


// ------- START import user data ---------

const gs = require('fs');
const usersfileLocation = './app/views/v' + PrototypeVersion + '/data/end-users-data.json';

let usersrawdata = gs.readFileSync(usersfileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var usersobj = JSON.parse(usersrawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var userName = [];
var userNameID = [];

console.log("v4 end-users.js data:\n");


for (x of usersobj["records"]) {
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  userName.push(usersobj["records"][counter]["fields"]["Name"]);
  userNameID.push(usersobj["records"][counter]["id"]);

  //console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import user data ---------


// ------- START import directorate data ---------

const hs = require('fs');
const directoratefileLocation = './app/views/v' + PrototypeVersion + '/data/directorate-data.json';

let directoraterawdata = gs.readFileSync(directoratefileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var directorateobj = JSON.parse(directoraterawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var directorateName = [];
var directorateNameID = [];


for (x of directorateobj["records"]) {
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  directorateName.push(usersobj["records"][counter]["fields"]["Name"]);
  directorateNameID.push(usersobj["records"][counter]["id"]);

  //console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import user data ---------



router.get('/v' + PrototypeVersion + '/service-info', function (req, res) {


  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "3";

  };

// replace user ID codes with names of user type

  var s;
  var t;

  for (t in userNameID) {

    for (s in user1[numberOfService]) {

      if (user1[numberOfService] == userNameID[t]) {
        user1[numberOfService][s] = userName[t];
      }

    }

    for (s in user2[numberOfService]) {

      if (user2[numberOfService] == userNameID[t]) {
        user2[numberOfService][s] = userName[t];
      }

    }

    for (s in user3[numberOfService]) {

      if (user3[numberOfService] == userNameID[t]) {
        user3[numberOfService][s] = userName[t];
      }

    }

    for (s in user4[numberOfService]) {

      if (user4[numberOfService] == userNameID[t]) {
        user4[numberOfService][s] = userName[t];
      }

    }

    for (s in user5[numberOfService]) {

      if (user5[numberOfService] == userNameID[t]) {
        user5[numberOfService][s] = userName[t];
      }

    }

    for (s in user6[numberOfService]) {

      if (user6[numberOfService] == userNameID[t]) {
        user6[numberOfService][s] = userName[t];
      }

    }

  }


// replace directorate ID codes with name of directorate


  var u;
  var v;

  for (v in directorateNameID) {

    for (u in directorate[numberOfService]) {

      if (directorate[numberOfService] == directorateNameID[v]) {
        directorate[numberOfService][u] = directorateName[v];
      }

    }

  }




  res.render('v' + PrototypeVersion + '/service-info', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    suggestedAlternativeEndUserNeed: suggestedAlternativeEndUserNeed[numberOfService],
    collatedEndUsers: collatedEndUsers[numberOfService],
    collatedEndUsersNeeds: collatedEndUsersNeeds[numberOfService],
    collatedSupportingUsers: collatedSupportingUsers[numberOfService],
    collatedSupportingUsersNeeds: collatedSupportingUsersNeeds[numberOfService],

    user1: user1[numberOfService],
    user1Needs: user1Needs[numberOfService],
    user1Type: user1Type[numberOfService],

    user2: user2[numberOfService],
    user2Needs: user2Needs[numberOfService],
    user3: user3[numberOfService],
    user3Needs: user3Needs[numberOfService],
    user4: user4[numberOfService],
    user4Needs: user4Needs[numberOfService],
    user5: user5[numberOfService],
    user5Needs: user5Needs[numberOfService],
    user6: user6[numberOfService],
    user6Needs: user6Needs[numberOfService],

    servicePatterns: servicePatterns[numberOfService],

    servicePhase1: servicePhase1[numberOfService],
    servicePhase1Providers: servicePhase1Providers[numberOfService],
    servicePhase2: servicePhase2[numberOfService],
    servicePhase2Providers: servicePhase2Providers[numberOfService],
    servicePhase3: servicePhase3[numberOfService],
    servicePhase3Providers: servicePhase3Providers[numberOfService],

    departmentalPriority: departmentalPriority[numberOfService],

    policyPartners: policyPartners[numberOfService],
    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    directorate: directorate[numberOfService],
    FTE: FTE[numberOfService],

    serviceBudget: serviceBudget[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService],

    validatedInformation: fundName[validatedInformation]



  })
})





}
