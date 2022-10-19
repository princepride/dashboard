const axios = require("axios");
const date = "2022-08-22"
axios.put("http://localhost:3001/stockportfolio", {date:date})
.then((response)=>{
    const data = response.data;
    console.log(data);
})