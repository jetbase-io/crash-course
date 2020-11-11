import { getRequest } from "../services/requestService";

async function getUsers(query) {
    return await getRequest('/users', query)
}

async function getSkills(query) {
    return await getRequest('/skills', query)
}

async function getEducation(query) {
    return await getRequest('/education', query)
}

export {
    getUsers,
    getSkills,
    getEducation
};

