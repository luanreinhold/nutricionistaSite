import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.listen(process.env.PORT, () => console.log(`Api Online na porta ${process.env.PORT}`));