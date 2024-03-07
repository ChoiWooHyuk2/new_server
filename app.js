const express = require("express");
const server = express();

//css 파일을 적용하기위해 use 로 public 폴더 참조
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/site", (req, res) => {
  res.sendFile(__dirname + "/site.html");
});

server.get("/timetable", (req, res) => {
  res.sendFile(__dirname + "/timetable.html");
});

//순서대로 돌아가서 위에내용이 처리가 안되면 해당 use 가 마지막으로 실행됨. 그래서 404 파일이 켜짐
server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("3000 port listening");
});
