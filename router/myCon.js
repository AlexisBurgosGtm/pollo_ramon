var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql5030.site4now.net',
    user: 'a6478c_ramon',
    password: 'razors1805',
    database: 'db_a6478c_ramon'
});

let my = {
    Query: (res, qry) => {

        try {
            pool.query(qry, function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results[0].solution);
                res.send(results);
            });
        } catch (error) {
            res.send('error: ' + error);
        }

    }
}

module.exports = my;