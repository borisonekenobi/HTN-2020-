let found = {};
let allMentors = {};
let mentee = {};

function findRelevant(mentee) {
    for (let i = 0; i < allMentors.length; i++) {
        const newFind = isMatch(allMentors[i], mentee);
        if (newFind !== false) {
            console.log("New match with " + newFind.name);
            found.push(newFind);
        }
    }
}

function isMatch(mentor, mentee) {
    for (let i = 0; i < mentor.tags.length; i++) {
        for (let j = 0; j < mentee.tags.length; j++) {
            if (mentor.tags[j] === mentee.tags[i]) {
                return mentor;
            }
        }
    }
}

findRelevant(mentee);

for (let i = 0; i <= found[i]; i++) {
    console.log("Matched with " + found[i].name);
}
