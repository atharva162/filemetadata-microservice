var express = require('express');
let multer  = require('multer')
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = 3000;
app.listen(port, function () {
  console.log('Server started on port ' + port)
});
app.get('/api/hello',(req,res)=>{
  res.json('{greetings: "Hello from API"}')
})

app.post('/api/fileanalyse',multer().single('upfile'),(req,res)=>{
  console.log(req.file);
  let responseObj = {};
  responseObj['name'] = req.file.originalname;
  responseObj['type'] = req.file.mimetype;
  responseObj['size'] = req.file.size + ' bytes';
  res.json(responseObj);
})
