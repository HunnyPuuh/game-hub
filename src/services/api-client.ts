import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a592d3b7a52f41939539cabc7b80108f'
    }
})