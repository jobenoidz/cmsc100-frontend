import express from 'express';

const app = express();

app.use(express.static('static'));
app.listen(3000, ()=> {console.log(`Server started at port 3000`)})