import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '41e00081c9254897a6a3a33121a94c35'
    }
});