var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to SQLite database.')
        db.run(`CREATE TABLE players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            country text,
            team text,
            avatar text 
            )`, (err) => {
            if (err) {
                console.log('table has already been created')
            } else {
                console.log('table created with success')
            }
        })
    }
})

module.exports = db
