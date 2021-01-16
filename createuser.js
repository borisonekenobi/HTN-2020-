//test users
let nameField = document.getElementById('username');
console.log(nameField)

let numUsedIds = 0
const testMentor = new User(1, 'math, music, science', 'mentor');
const testMentee = new User(2, 'math, music, science', 'mentee');

function User(id, name, tags, role) {
    this.id = id;
    this.name = name;
    this.tags = tags;
    this.role = role;

    numUsedIds += 1;
}

User.prototype.getTags = function() {
    //return array/string
}

function createUniqueId() {
    return numUsedIds + 1;
}

function addToDatabase(user) {
    //add to database
}

function onRegistrationSubmit() {
    createUser(name, tags, role);
}

function createUser(name, tags, role) {
    //if registration conditions are met create new user
    const newUser = new User(numUsedIds + 1, name, tags, role);
    addToDatabase();
}

function submitClick() {
    console.log(nameField.value);
}












