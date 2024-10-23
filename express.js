import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 2345 

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Mi pagina</h1>')
})

app.listen(PORT, ()=>{
    console.log(`server listening on port http://localhost:${PORT}`);
})