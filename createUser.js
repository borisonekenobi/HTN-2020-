let numUsedIds = 0;

// const testMentor = new User(1, 'math, music, science', 'mentor');
// const testMentee = new User(2, 'math, music, science', 'mentee');

function User(id, name, email, password, role) {
    this.id = numUsedIds + 1;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;

    numUsedIds += 1;
}











