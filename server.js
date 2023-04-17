const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/routers', (req, res) => {
    const db = new sqlite3.Database("C:\\Users\\splat\\DataGripProjects\\diplom_routers\\identifier.sqlite");

    db.all('SELECT * FROM routers', [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows);
    });

    db.close();
});

app.get('/access-points', (req, res) => {
    const db = new sqlite3.Database("C:\\Users\\splat\\DataGripProjects\\diplom_routers\\identifier.sqlite");

    db.all('SELECT * FROM access_points', [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows);
    });

    db.close();
});

app.get('/obstacles', (req, res) => {
    const db = new sqlite3.Database("C:\\Users\\splat\\DataGripProjects\\diplom_routers\\identifier.sqlite");

    db.all('SELECT * FROM obstacles', [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows);
    });

    db.close();
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
