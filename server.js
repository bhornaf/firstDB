const express = require("express");
const { Server: HTTPServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const productsRouter = require("./routes/products");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("public"));
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
