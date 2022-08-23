import express from 'express';
const app = express();
const port = 4000;

// Test de routage sans requête
app.get('/', (_,res) => {
    res.send('Hello Express')
})

app.listen(port, () => {
    console.log('Serveur démarré avec succès sur le port 4000');
})