//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors'
import path from 'path';

//creando el servidor
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());



//rutas
app.get('/', (req, res) => {
    res.json({
        "Login Api node": {
            "inf":"demo Api loginDemo, con node, mongoose y jwt"
        },

    })
});


//importaciones de las rutas
import RolesRouter from './routes/roles.router';
import UserRouter from './routes/usuarios.router';
import LoginRouter from './routes/login.router';

app.use('/api',RolesRouter);
app.use('/api',UserRouter);
app.use('/api',LoginRouter);


//libs
import { createRoles } from './libs/onInit';
createRoles();

//exportando el app
module.exports = app;