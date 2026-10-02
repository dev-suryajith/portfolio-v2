import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


export const addProjectAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/projects/add`, reqBody);
};

export const getProjectsAPI  = async () => {
    return await commonAPI("GET", `${serverURL}/projects/get`, {});
};

export const editProjectAPI  = async (id,project) => {
    return await commonAPI("PUT", `${serverURL}/projects/edit/${id}`, project);
};

export const deleteProjectAPI  = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/projects/delete/${id}`, {});
};
