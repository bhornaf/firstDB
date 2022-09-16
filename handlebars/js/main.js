const socket = io();

socket.on("connect", () => {
    console.log("Conectado al servidor");
});

socket.on("UPDATE_MESSAGES", (msg, allMessages) => {
    console.log(allMessages);

    document.getElementById("messages").innerHTML = "";
    for (const message of allMessages) {
        appendMessage(message);
    }
});

socket.on("NEW_MESSAGE", (msg) => {
    appendMessage(msg);
});

function appendMessage(msg) {
    document.getElementById("messages").innerHTML += `
    <div class="row">
        <b class="text-primary">${msg.email} </b> 
        <b class="text-secondary">${msg.date}</b>
        <b class="text-success">${msg.message}</b>
    </div>
  `;
}

function sendMessages() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    socket.emit("POST_MESSAGE", { email, message });
}
