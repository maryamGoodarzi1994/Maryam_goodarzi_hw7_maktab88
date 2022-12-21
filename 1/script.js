function combinedUserData(personData, additionalPersonData) {
  for (person of personData) {
    for (data of additionalPersonData) {
      if (person.uid === data.uid) {
        Object.assign(person, data);
      }
    }
  }
  return personData;
}
function readUserData(arrOfObj) {
  arrOfObj.map(function (person) {
    for (key in person) {
      console.log(`${key} : ${person[key]}`);
    }
  });
}

function createUserObj(uid, firstName, lastName, position, city) {
  return {
    uid,
    firstName,
    lastName,
    position,
    city,
  };
}

// console.log(createUserObj(1, "mary", "goody", "web", "teh"));

let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

// userData ======>
// [
//   {
//     uid: 1,
//     firstName: 'Ali',
//     lastName: 'Mahdavi',
//     position: 'Back-End Develope',
//     city: 'Taleqan',
//   }, ...
// ];
// combinedUserData(personData, additionalPersonData);
// console.log(combinedUserData);
// readUserData(combinedUserData);
let combinedUserDataArray = combinedUserData(personData, additionalPersonData);
// console.log(readUserData(combinedUserDataArray));

function addUserToPersonArray(id, firstName, lastName, position, city) {
  let newUser = createUserObj(id, firstName, lastName, position, city);
  let isUidExist = false;
  combinedUserDataArray.map(function (person) {
    if (person.uid === newUser.uid) {
      isUidExist = true;
      console.log('user is added successfully');
      return;
    }
  });
  if (!isUidExist) {
    combinedUserDataArray.push(newUser);
    console.log(combinedUserDataArray);
  } else {
    console.log("You can not add repetitive uid");
  }
}
// addUserToPersonArray(20, "mary", "goody", "web", "teh");

function updateUserDataByUid(id, firstName, lastName, position, city) {
  let userIsFound = false;
  combinedUserDataArray.forEach(function (person) {
    if (person.uid === id) {
      person.firstName = firstName;
      person.lastName = lastName;
      person.position = position;
      person.city = city;
      userIsFound = true;
    }
  });
  return userIsFound ? combinedUserDataArray :  "user is not found";
}
console.log(updateUserDataByUid(3, "mary", "goody", "web", "teh"));

function deleteUserDataByUid (uid){
    let isUserExist = false;

combinedUserDataArray.forEach(function(person,index){
if(person.uid === uid){
    combinedUserDataArray.splice(index,1);
    isUserExist = true;
}
})
console.log(combinedUserDataArray)
return (isUserExist)? 'user is removed successfully' : 'user is not found'

}
console.log(deleteUserDataByUid(20));
