require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');

const app = createServer();



app.get('/hola/:name', (req, res) =>{
  res.send({message: `Hola ${req.params.name}`});
})

app.listen(process.env.PORT, () => {
  console.log(`API running on http://localhost:${process.env.PORT }`);
})