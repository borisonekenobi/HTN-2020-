let numUsedIds = 0;

function createUser(id, name, email, password, role) {
    this.id = numUsedIds + 1;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;

    numUsedIds += 1;
}