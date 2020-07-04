const express = require('express');
const app = express();
const func = require('./funcionarios')

app.use(express.json())

app.get('/', (req, res) => {
    res.json(func)
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const people = func.filter(el => el.id == id)

    res.json(people)
});

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const p = func.filter(el => el.id != id);

    res.json(p);
});

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const p = func.filter(el => el.id == id);

    if (p.length === 0) {
        return res.status(204).json();
    }

    res.json(p);
});

app.listen('3000', () => {
    console.log('server is online');
})