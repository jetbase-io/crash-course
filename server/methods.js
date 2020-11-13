function getJson(fileName, filter={}) {
    let data = require(`./data/${fileName}`);

    data = Array.isArray(data) ? data : [data];

    data = data.filter(el => Object.keys(filter).every(key => filter[key] == el[key]));

    return data;
}

function getSkills(filter={}) {
    return getJson('skills', filter)
}

function getEducation(filter={}) {
    return getJson('education', filter)
}

function getUsers(filter={}) {
    return getJson( 'user', filter);
}

module.exports = {
    getSkills,
    getUsers,
    getEducation
};