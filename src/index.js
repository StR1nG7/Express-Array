const express = require('express');
const bodyParser = require('body-parser');
const UserControllers = require('./controllers');
const { toJSON } = require('./utils');

const app = express();

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    const users = toJSON(UserControllers.getUsers());
    res
        .status(200)
        .send(users);
});

app.post('/users', (req, res) => {
    const users = toJSON(UserControllers.saveUser(req.body));
    res
        .status(201)
        .send(users);
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const users = toJSON(UserControllers.deleteUser(id));
    res
        .status(201)
        .send(users);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const users = toJSON(UserControllers.updateUser(id, req.body));
    res
        .status(201)
        .send(users);
});

app.listen(8000, () => console.log('Server listening on port 8000'));