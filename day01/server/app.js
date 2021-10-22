//引入express框架
const express = require('express');
//路径处理模块
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
//创建web服务器
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });
//静态资源访问服务功能
app.use(express.static(path.join(__dirname,'public')));
//01.html
app.get('/first',(req,res)=>{
    res.send('Hello Ajax=>get方式请求');
});
app.post('/first',(req,res)=>{
    res.status(400).send('Hello Ajax=>post方式请求');
});
//02.html
app.get('/responseData',(req,res)=>{
    res.send({"name":"zhangshan"});
})
//03.html
app.get('/get',(req,res)=>{
    res.send(req.query);
})
//04.html
app.post('/post',(req,res)=>{
    res.send(req.body);
})
//05.html
app.post('/json',(req,res)=>{
    res.send(req.body);
})

//06.html
app.get('/readystate',(req,res)=>{
    res.send('hello');
})
//07.html
app.get('/error',(req,res)=>{
    //console.log(abc);
    res.status(400).send('not ok');
})
//08.html
app.get('/cache',(req,res)=>{
    fs.readFile('./test.txt',(err,result)=>{
        res.send(result);
    })
})
//监听端口
app.listen(3000);
console.log('服务器启动成功');