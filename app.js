import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

const app = express();

app.use(express.json());  

const PORT = 8080;


app.use('/api/users', userRoutes);
app.use('/api/productos', productoRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});