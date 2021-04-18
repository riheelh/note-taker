var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, ()=>{
    console.log('server started at port 8080')
})

