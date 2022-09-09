const express = require("express");
const app = express();
const mongoose = require('mongoose')
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // 로그인 토큰을 쿠키에 저장하기
const { append } = require("express/lib/response");
require("dotenv").config(); 


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

console.log(process.env.mongoURI)
// mongoDB 연결하기
mongoose.connect(process.env.mongoURI, {

}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

// 라우터
app.get('/', (req, res) => { // 루트 디렉토리에 라우트
  res.send('Hello World!~~ from.root') // 출력
})

// app.use로 라우터 경로 연결

// 서버 작동하기
app.listen(port, () => { // 포트(port)에서 실행
  console.log(`Example app listening on port ${port}`)
})