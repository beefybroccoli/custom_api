require("dotenv").config();
const server = require("./api/server");
const PORT = process.env.PORT || 9000;

server.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
    console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);
    console.log("process.env.DEV_DATABASE_URL = ", process.env.DEV_DATABASE_URL);
})  