// Your code here.

const getFirstName = function(person) {
  return person.firstName
}

const getLastName = function(person) {
  return person.lastName
}

const getFullName = function(person) {
  return person.firstName + ' ' + person.lastName
}

const setFirstName = function(obj, name) {
   obj.firstName = name 
}

const setAge = function(obj, age) {
  obj.age = age
}

const giveBirthday = function(person, age) {
  if (person.age === undefined) {
    return person.age = 1
  } else {
    return person.age += 1
  }
}

const marry = function(personOne, personTwo) {
  personOne.married = true
  personTwo.married = true
  personOne.spouseName = personTwo.firstName + ' ' + personTwo.lastName
  personTwo.spouseName = personOne.firstName + ' ' + personOne.lastName
}

const divorce = function(personOne, personTwo) {
personOne.married = false
personTwo.married = false
delete personOne.spouseName
delete personTwo.spouseName
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
