const express =require('express');
const app = express();
const adminRouter = require("./router/admin");
const userRouter = require("./router/user");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
