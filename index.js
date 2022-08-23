import express from 'express';
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log('Serveur démarré avec succès sur le port 4000');
})