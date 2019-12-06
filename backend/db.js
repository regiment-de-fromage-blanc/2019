/* Data: {
    "name": "Thomas",
    "password": "azerty"
} */
function register(req, res, db) {
    let name = req.body.name;
    let password = req.body.password;
    if (name !== undefined && password !== undefined) {
        db.collection('users').find({name: name}, (err, result) => {
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

module.exports = {
    register: register
}
