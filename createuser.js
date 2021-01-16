//test users
//const userDatabaseService = require('userDatabaseAPI.js');
let numUsedIds = 0;

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
    return this.tags
}

function createUser(name, tags, role) {
    //if registration conditions are met create new user
    const newUser = new User(numUsedIds + 1, name, tags, role);
    //userDatabaseService.addUser(newUser);
}

function submitClick() {
    const nameField = document.getElementById('username');
    const userTypeField = document.getElementById('userType');
    const userTagsField = document.getElementById('userTags');
    createUser(nameField.value, userTagsField.value, userTypeField.value);
}












