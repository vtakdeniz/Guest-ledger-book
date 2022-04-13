
const axios = require("axios")


const baseUrl = process.env.API || "http://localhost:8080"

export async function  fetchAllComments(url=baseUrl){
    return await axios.get(url+"/comments",{headers: {'Accept': 'application/json',}}).then(r=>r.data)
}

export async function postComment(data,url=baseUrl){
    let str=JSON.stringify(data)
    return await axios.post((url+"/comments"),str,{headers: {'Content-Type': 'application/json',}}).then(r=>r.data)
}

export async function deleteAllComments(url=baseUrl){
    return await axios.delete((url+"/comments")).then(r=>r.data)
}
