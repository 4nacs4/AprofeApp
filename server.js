var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("."));
app.listen(5000, function() {
    console.log("Node server App running on http://localhost:5000");
  });