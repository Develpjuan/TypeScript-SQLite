import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student-routes";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


//ROUTES
app.use('/api-v1', studentRoutes);
// app.get('/', (req, res) => {
//     res.send("Hello Word....!");
// })

app.listen(port, () => {
    console.log(`Listener Server http://localhost:${port}`);
})