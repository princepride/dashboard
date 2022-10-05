
const axios = require("axios");

const periodData = (name) => {
	const endDate = new Date();
	const startDate = new Date(endDate.getTime() - 14*24*60*60*1000);
	const endDay = endDate.getDate().toString().padStart(2,'0');
	const endMonth = (endDate.getMonth()+1).toString().padStart(2,'0');
	const endYear = endDate.getFullYear();
	const startDay = startDate.getDate().toString().padStart(2,'0');
	const startMonth = (startDate.getMonth()+1).toString().padStart(2,'0');
	const startYear = startDate.getFullYear();

	const encodedParams = new URLSearchParams();
	const string1 = startYear+"-"+startMonth+"-"+startDay;
	const string2 = endYear+"-"+endMonth+"-"+endDay;
	encodedParams.append("start", string1);
	encodedParams.append("symbol", name);
	encodedParams.append("end", string2);

	const options = {
  		method: 'POST',
  		url: 'https://yahoo-finance97.p.rapidapi.com/price-customdate',
  		headers: {
    		'content-type': 'application/x-www-form-urlencoded',
    		'X-RapidAPI-Key': '6be3939a73msh413d424fc2d04c4p15ba7bjsnd28f29cebde3',
    		'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
  		},
  		data: encodedParams
	};
	axios.request(options).then(function (response) {
		//const res = [];
		//for (let i = 0; i < response.data.data.length; i++) {
		//	const temp = {}
		//	temp.x = i
		//	temp.yval = response.data.data[i]['Adj Close']
		//	res.push(temp)
		//}
		console.log(response.data)
		return res;
	}).catch(function (error) {
		return []
	});
}

const fetchStockData = (name) => {
	const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("symbol", name);

const options = {
  method: 'POST',
  url: 'https://yahoo-finance97.p.rapidapi.com/stock-info',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '6be3939a73msh413d424fc2d04c4p15ba7bjsnd28f29cebde3',
    'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
	return response.data.data;
}).catch(function (error) {
	console.error(error);
	return {};
});
}

export { fetchStockData, periodData };
