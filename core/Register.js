const testMentor = new User(1, 'math, music, science', 'mentor');
const testMentee = new User(2, 'math, music, science', 'mentee');

function User(id, tags, role) {
    this.id = id;
    this.tags = tags;
    this.role = role;
}

User.prototype.getTags = function() {
    //return array/string
}

function createUniqueId() {

}

function addToDatabase(user) {
    //add to database
}







