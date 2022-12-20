import axios from "axios";

export async function getUser(){
    let res = await axios.get(`https://reqres.in/api/login`);
    return res.data;
}