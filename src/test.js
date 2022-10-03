const axios = require('axios');
var cheerio = require("cheerio")
const url = "https://sg.finance.yahoo.com/"
axios.get(url).then((resp) => {
    var $ = cheerio.load(resp.data)
    
}).catch((err) => {

})