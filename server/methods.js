function getJson(fileName) {
    let data = require(`./data/${fileName}`);

    data = Array.isArray(data) ? data : [data];

    return {
      total: data.length,
      data: data
    };
}

function getSkills() {
    return getJson('skills')
}

function getUser() {
    return getJson('user')
}

function getEducation() {
    return getJson('education')
}

module.exports = {
    getSkills,
    getUser,
    getEducation
};