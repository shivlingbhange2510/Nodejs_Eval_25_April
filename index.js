const http = require('http');
const app = require('./Routes/banking');
const connectToDB = require('./DBConnection/mongoDB');
const PORT = 3000;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    
    console.log(`Server is running on port no ${PORT}`)
});

