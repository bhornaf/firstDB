const express = require("express");
const events = require("./socket_events");
const { Server: HTTPServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const { _SendMessages, _GetMessages } = require("./routes/chats");
const handlebars = require("express-handlebars");
// const messages = _GetMessages().then((data) => data);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("handlebars"));

const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: "index",
    layoutsDir: "./handlebars",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./handlebars");

app.get("/", (req, res) => {
    res.render("index", {});
});

socketServer.on("connection", (socket) => {
    _GetMessages().then((data) => {
        socket.emit(events.UPDATE_MESSAGES, data);
    });

    socket.on(events.POST_MESSAGE, (msg) => {
        const _msg = {
            ...msg,
            socket_id: socket.id,
            likes: 0,
            date: new Date().toLocaleString(),
        };

        _SendMessages(_msg).then((data) => {
            socketServer.emit(events.NEW_MESSAGE, _msg);
        });
    });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
