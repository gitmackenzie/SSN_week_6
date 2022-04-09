const express = require("express");
const app = express();
const bodyParser = require("body-parser")
// 수정된 부분 바디파서는 돌아가는데 영향이 있는지는 아직 불명확 ^^;

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sparta:sparta@cluster0.ool0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(bodyParser.json());

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("데이터베이스 연결 성공"));

const commentRouter = require("./routes/comment.js");
// 수정된 부분 "./routes"경로에서 "./routes/comment.js" 경로로 수정
// 명시해주지 않을 경우 index.js로 자동 설정

app.use("/api", commentRouter);

// 수정된 부분 "/"에서 "/api"로 경로 수정

app.listen(6000, () => {
    console.log("server started at 6000");
})