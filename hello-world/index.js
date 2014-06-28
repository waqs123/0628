var express = require('express');
var twig = require('twig');

var app = express();

app.engine('twig',twig.renderFile);

app.get("/", function(req,res){
res.locals.content = [{a:1,b:2,c:3}, {a:4,b:5,c:6}];
res.locals.content.forEach(function(c, i){
 console.log(i, c);
});
res.locals.contentObject = {a:1,b:2,c:3}
for(var key in res.locals.contentObject){
 console.log(key,res.locals.contentObject[key])
}
 res.render('test.twig',
  {title: 'Test Page'
});
});

app.listen(1234);