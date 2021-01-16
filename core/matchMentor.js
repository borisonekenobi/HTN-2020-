let allMentors = {};
let found = {};
let mentee = undefined;

function findRelevant(mentee) {

    for (let count = 0; count <= allMentors.length; count++) {
        const newFind = isMatch(allMentors[count], mentee);
        if (newFind !== false) {
            console.log("New match with " + newFind.name);
            found[found.length-1] = newFind;
        }
    }
}

function isMatch(mentor, mentee) {
    if (mentor.tags[0] === mentee.tags[0]) { //investigate ===
        return mentor;
    }
    else {
        console.log("Not a match")
        return false;
    }
}

findRelevant(mentee);

for (let count = 0; count <= found[count]; count++) {
    console.log("Matched with " + found[count].name);
}
