const express = require('express');
const {connect} = require('./src/utils/database')
const paisesRouter= require('./src/api/routes/paises.routes')
const comunidadesRouter= require('./src/api/routes/comunidades.routes')
const usersRouter = require("./src/api/routes/users.routes");
const {isAuth} = require('./src/middlewares/auth');
//const provinciasRouter= require('./src/api/routes/pais.routes')
const dotenv = require('dotenv');
const app = express()

dotenv.config();
const PORT = process.env.PORT || 8000;

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/paises', paisesRouter)
app.use('/comunidades', comunidadesRouter)
app.use('/users', usersRouter)
app.listen(PORT,()=>console.log(`listening http://localhost:${PORT}`))