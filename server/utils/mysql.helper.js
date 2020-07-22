const environment = process.env.ENVIRONMENT,
    mysql = require('mysql'),
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PWD,
        database: process.env.MYSQL_DB,
        multipleStatements: true,
    }),
    keys = 'user_id, page, city, country, environment, ip_address, path, referer, url' //id is primary key and auto incremented

connection.connect(e => {
    if (e) {
        console.error('error connecting: ' + e.stack)
        return
    }
    console.log('Connected to Database as id ' + connection.threadId)
})

module.exports = {
    addPageView: async (table_name, values) => {
        const query =
            'INSERT INTO '.concat(table_name) +
            ' ('.concat(keys) +
            ') VALUES ('.concat(values)
            resetQuery =
            '); SET @count = 0; UPDATE '.concat(table_name) +
            ' SET '.concat(table_name) +
            '.id = @count:= @count + 1; ' +
            'ALTER TABLE '.concat(table_name) +
            ' AUTO_INCREMENT = 1;'
            
        connection.query(query.concat(resetQuery), (err, results, fields) => {
            if (err) {
                console.log('unsuccessful track')
            } else {
              console.log('successful track')
            }
        })
    }
}