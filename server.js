var express = require('express');
var app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(3000, ()=>{
    console.log('server started at port 3000')
})

