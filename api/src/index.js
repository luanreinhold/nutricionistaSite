import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import admin from './controller/adminController.js'
import paciente from './controller/pacienteController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(admin);
server.use(paciente);

server.listen(process.env.PORT, () => console.log(`Api Online na porta ${process.env.PORT}`));