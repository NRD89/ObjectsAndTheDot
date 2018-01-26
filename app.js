var person = new Object();

person["firstname"] = "Nathan";
person["lastname"] = "Dalton";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "5000 Via Zapatos";
person.address.city = "Riverside";
person.address.state = "CA";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
