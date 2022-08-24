import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;

app.use(express.json());
dotenv.config();

const uri = process.env.STRING_URI;
const client = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });


// Test de routage GET sans requête
app.get('/', (_, res) => {
    client.connect((err, db) => {
        console.log('Connecté avec succès à la bd');
        if (err || !db) { return false }
        db.db('blog').collection('posts').find().toArray(function (err, results) {
            if (!err) {
                res.status(200).send(results);
            }
        })
        // perform actions on the collection object
        // client.close();
    });
})

// Test de routage POST avec insertion de données
// format obj
// const obj = {title: 'title', content: 'content...'};

// format req.bodie -> format JSON
app.post('/insert', (req, res) => {
    client.connect((err, db) => {
        console.log('Connecté avec succès à la bd');
        if (err || !db) { return false }
        db.db('blog').collection('posts').insertOne(req.body, function (err, results) {
            if (!err) {
                res.status(200).send(results);
            }
        })
    });
})

app.listen(port, () => {
    console.log('Serveur démarré avec succès sur le port 4000');
})