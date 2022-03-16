import express  from "express";
import config from "config";
import router from "./routes/mainRouter"

const port:number = config.get('PORT');
const host: string = config.get('HOST');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router)

app.listen(port,host, () => {
  console.log(`Servidor rodando no http://${host}:${port}`);
})