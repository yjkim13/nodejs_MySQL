var sanitizeHtml = require('sanitize-html');

module.exports = {
  HTML : function(title,list,body,control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>WEB</h1>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/author">Author</a></li>
      <li><a href="/create">Create</a></li>
      </ul>
      
      <form action="/search" method="get">
        <p>
        <input type="text" name="title" placeholder="검색어를 입력하세요.">
        <input type="submit" value="Search">
        </p>
      </form>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  }, list : function (topics){
    var list = '<ol>';
    var i = 0;
    while(i < topics.length){
      list = list + `
      <li><a href="/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list + '</ol>';
      return list;
  }, authorSelect:function(authors, author_id){
    var tag = '';
    var i = 0;
    while( i < authors.length){
      var selected = '';
      if(authors[i].id === author_id){
          selected = ' selected';
      }
      tag += `<option value = "${authors[i].id}"${selected}>${sanitizeHtml(authors[i].name)}</option>`;
        i++;
    }
    return`
      <select name = "author">
        ${tag}
      </select>
    `
  },authorTable:function(authors){
    var tag = `<table>`;
    var i = 0;
    while(i < authors.length){
        tag += `
            <tr>
            <td>${sanitizeHtml(authors[i].name)}</td>
            <td>${sanitizeHtml(authors[i].profile)}</td>
            <td><a href="/author/update?id=${authors[i].id}">update</a></td>
            <td>
            <form action="/author/delete_process" method="post">
            <input type="hidden" name = "id" value="${authors[i].id}">
            <input type="submit" value="delete">
          </form>
            </td>
            </tr>
            `
        i++;
    }
    tag += `</table>`;
    return tag;
  },searchList:function(topic){
    var last = ``;
    var i = 0;
    while(i < topic.length){
      last = last + `
          <h2>${sanitizeHtml(topic[i].title)}</h2>${sanitizeHtml(topic[i].description)}<br>
          `
          i++;
        }
          return last;
  }
} 
