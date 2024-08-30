const venom = require('venom-bot');
const express = require('express')
const app = express()
const port = 4000

let cliente;

app.get('/whatsap/:numero', async (req, res) => {
  let numero = req.params.numero;
  try {
    data = await cliente.checkNumberStatus(`${numero}@c.us`);
    console.log(data)
    if (data.status === 200) res.json(data)
    else res.json({status: 400, numberExists: false})
  } catch (error) {
    res.json({status: 503, message: 'Error'})
  }
  

})

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => cliente = client)
  .catch((erro) => {
    console.log(erro);
  });


app.listen(port, () => {
  console.log('Servido correctamente')
})