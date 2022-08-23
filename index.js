import express from 'express';
import mongodb from 'mongodb';
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;


const uri = "mongodb+srv://pasot:Zi73TqWxFnkPPvb8@epfullstackmern.xs8acz8.mongodb.net/?retryWrites=true&w=majority";
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