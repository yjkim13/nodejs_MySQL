var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db');
var topic = require('./lib/topic');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === `/`){  // 처음 페이지
      if(queryData.id === undefined){
          topic.home(request, response);
      } else {
       topic.page(request,response);
      }
    } else if (pathname === '/create') { // 글 생성
      topic.create(request,response);
    } else if (pathname === '/create_process') { // 글 생성 프로세스
    topic.create_process(request,response);
    } else if (pathname === '/update') { // 글 수정
      topic.update(request,response);
    } else if (pathname === '/update_process') { // 글 수정 프로세스
      topic.update_process(request,response);
    } else if (pathname === '/delete_process') { // 글 삭제 프로세스
      topic.delete_process(request,response);
    }else {
      response.writeHead(404);
      response.end('Not Found');
    }
});
app.listen(3000);
