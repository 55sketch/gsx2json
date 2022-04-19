
var request = require('request');

module.exports = function (req, res, next) {
    try {
        var params = req.query,
           
           
            sheet = params.sheet,
           
            url = 'https://ethercalc.net/' + sheet + '.csv.json';
			request(url, function (error, response, body) {
            
            if (!sheet) {
                return res.status(response.statusCode).json('You must provide a sheet name from ethercalc');
            }
            if (!error && response.statusCode === 200) {
                var dataAll = JSON.parse(response.body);
                
			
				const rows = [];

				const rawRows = dataAll || [];
				const headers = rawRows.shift();
     
				rawRows.forEach((row) => {
				 const rowData = {};
				row.forEach((item, index) => {
				  rowData[headers[index]] = item;
				});
				rows.push(rowData);
				console.log(rowData)
			  });
			
                return res.status(200).json(rows);
				
				
            } else {
                var data = JSON.parse(response.body);
                return res.status(response.statusCode).json(data.error);
            }
        });

    } catch (error) {
        var data = JSON.parse(response.body);
        return res.status(response.statusCode).json(data.error);
    }
};
