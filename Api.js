
const axios = require("axios")


const baseUrl = process.env.API || "http://localhost:9000"

export async function  fetchAllComments(){
    console.log(baseUrl)
    return await axios.get(baseUrl+"/comments",{headers: {'Accept': 'application/json',}}).then(r=>r.data)
}

export async function postComment(data){
    let str=JSON.stringify(data)
    return await axios.post((baseUrl+"/comments"),str,{headers: {'Content-Type': 'application/json',}}).then(r=>r.data)
}

export async function deleteAllComments(){
    return await axios.delete((baseUrl+"/comments")).then(r=>r.data)
}
