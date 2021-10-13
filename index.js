const express = require('express');
const app = express();
const port = 8080;
const translate = require('translate-google');

app.get('/', async function (req, res) {
    try {
        const { text } = req.query;
        const input = text ?? "Invalid Input";
        const data = await translate(input, { from: 'en', to: 'vi' })
        res.status(200).send(data);
    } catch (err) {
        console.log(err)
        req.status(500).send(err)
    }
})
app.get('/vi', async function (req, res) {
   try {
        const {text} = req.query;
        const input = text ?? "Invalid Input";
        const data = await translate(input, { from: 'vi', to: 'en'});
        res.send(data);
   } catch (err) {
       console.log(err)
       req.status(500).send(err)
   }
})

app.listen(port, function () {
    console.log("Your app running on port " + port);
})