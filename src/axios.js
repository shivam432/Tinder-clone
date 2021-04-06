import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-op.herokuapp.com/",
});

export default instance;