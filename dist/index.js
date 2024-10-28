"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_routes_1 = __importDefault(require("./routes/student-routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//ROUTES
app.use('/api-v1', student_routes_1.default);
// app.get('/', (req, res) => {
//     res.send("Hello Word....!");
// })
app.listen(port, () => {
    console.log(`Listener Server http://localhost:${port}`);
});
