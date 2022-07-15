if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

// Importa express
const express = require('express');

// Importa models
const conn = require('./models/conn');

// Importa rotas
const taskRouter = require('./routes/task.routes')
const loginRouter = require('./routes/login.routes')
const authRouter = require('./auth/auth');
const userRouter = require('./routes/user.routes')

// Importa cors
const cors = require('cors');


const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

//  =*=*=*=*=*=*=*=*=*=*=*=*=*

// Get
app.get('/', (req, res) => {
    res.send('Ola Mundo');
})

app.use('/login', loginRouter);
app.use('/auth/register', authRouter);
app.use('/task', taskRouter);
app.use('/users', userRouter);

//  =*=*=*=*=*=*=*=*=*=*=*=*=*

//Conexão local com mongodb
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

conn(db_url, db_user, db_pass, db_data);


app.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}/`);
});