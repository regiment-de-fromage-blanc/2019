/* Data: {
    "name": "Thomas",
    "password": "azerty"
} */
function register(req, res, db) {
    const name = req.body.name;
    const password = req.body.password;

    if (name !== undefined && password !== undefined) {
        db.collection('users').find({name: name}).toArray((err, result) => {
            if (err) throw err;
            if (result.length === 0) {
                db.collection('users').insertOne({
                    name: name,
                    password: password
                }, (err, result) => {
                    if (err) throw err;
                    res.send({
                        status: true,
                        description: `Account created for ${name}`
                    });
                });
            } else {
                res.send({
                    status: false,
                    description: "Name already taken"
                });
            }
        });
    } else {
        res.statusMessage = "Post data is not conform";
        res.status(400).end();
    }
}

/* Data: {
    "name": "Thomas",
    "password": "azerty"
} */
function login(req, res, db) {
    const error = {
        status: false,
        description: "Wrong username/password"
    }
    const name = req.body.name;
    const password = req.body.password;

    if (name !== undefined && password !== undefined) {
        db.collection('users').findOne({name: name, password: password}, (err, result) => {
            if (err) throw err;
            if (result) {
                res.send({
                    status: true,
                    description: "Correct authentification"
                });
            } else {
                res.send(error);
            }
        });
    } else {
        res.send(error);
    }
}

module.exports = {
    register: register,
    login: login
}
