import axios from "axios";

export async function getUserData() {
    return axios.post("http://localhost:4000/profile")
    .then(res => res.data);
}

export async function signUpMongo(data) {
    return axios.post("http://localhost:4000/signup", data, {
        headers:{
            Authorization: "Bearer " + data.accessToken
        }
    })
    .then(res => res.data);
}

export async function signInMongo(data) {
    return axios.get("http://localhost:4000/login", {
        headers:{
            Authorization: "Bearer " + data
        } 
    })
    .then(res => res.data);
}