const axios = require("axios")

export async function  fetchAllComments(url){
    return await axios.get(url+"/comments",{headers: {'Accept': 'application/json',}}).then(r=>r.data)
}

export async function postComment(url,data){
    let str=JSON.stringify(data)
    return await axios.post((url+"/comments"),str,{headers: {'Content-Type': 'application/json',}}).then(r=>r.data)
}

export async function deleteAllComments(url){
    return await axios.delete((url+"/comments")).then(r=>r.data)
}
