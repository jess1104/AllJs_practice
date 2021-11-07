// 載入HTTP模組
const http = require("http");

const hostname = "localhost";
const port = 8500;

// createServer 建立伺服器
// 設定回覆(res)HTTP標頭的狀態及內容類型
http
  .createServer(function (req, res) {
    /*
      Content-Type:
      text/html --- HTML 文件
      text/plain --- 純文字
      application/json --- JSON檔
      video/mpeg4 --- 影片
    */
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>hello world</h1>");
    res.end();
    // res.write("hello wilson");
    // res.end();
  })
  .listen(port, function () {
    // 聽到這個port返回的
    console.log("sever is running on 8500");
  });
