const express = require('express');
const ejs = require('ejs');
//const port = 8000;
const app = express();

app.use(express.urlencoded({extended:true}));
//setting the views directory for the views(index.html) to be rendered.
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views','./views');
    

//setting the routers to the router directory(MVC followed)
app.use('/',require('./routes/index'));

//initialising the port and running it.
app.listen(process.env.PORT || 8000, '0.0.0.0', function(err){
    if(err){
        console.log(`Error running the server at port ${process.env.PORT}`);
    }
    console.log(`Server running good!!`);
});
