var mysql = require('mysql');

var createDBConnection = function() {

}

module.exports = function() {
	var connection = mysql.createConnection({
						host: 'localhost',
						user: 'root',
						password: 'root',
						database: 'caronas_rural'
					});
	return connection;
}
