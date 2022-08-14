"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const calculator_1 = __importDefault(require("./routes/calculator"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// app.use(bodyParser,urlencoded({
//     extended: false
// }));
app.use((0, cors_1.default)());
const port = 1211;
// app.use('/', (req: Request, res: Response, next) => {
//     next();
// })
app.use('/api/calc/', calculator_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
