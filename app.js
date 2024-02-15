const express = require('express');
var http = require('http');
const ip = require('ip');
const localIP = ip.address();
const path = require('path');

const livereload = require('livereload');
const connectLivereload = require('connect-livereload');


const liveserver = livereload.createServer({
 host: localIP
});


const pub = path.join(__dirname,'public');

liveserver.watch(pub);

const app = express();

app.use(connectLivereload())



// Your other Express setup...
app.use('/', express.static('public'));
server = http.createServer(app);





if (process.env.PORT){
 
 server.listen(process.env.PORT, () => {
  console.log(`Listening on`);
});
 
}else{

server.listen(8080, localIP, () => {
  console.log(`Listening on https://${localIP}:8080`);
});
 
 
}