import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;

dotenv.config();

const uri = process.env.STRING_URI;
const client = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

client.connect(err => {
    console.log('Connecté avec succès à la bd');
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


// Test de routage sans requête
app.get('/', (_, res) => {
    res.send('Hello Express')
})

app.listen(port, () => {
    console.log('Serveur démarré avec succès sur le port 4000');
})