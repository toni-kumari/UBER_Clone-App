const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});