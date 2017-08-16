const express = require("express");
const app = express();
    app.use(express.static('../build'))
const PORT = process.env.PORT || 8080;
app.listen(8080,()=>{
    console.log(`listen at port ${PORT} `);
});
app.get('/',(req,res)=>{res.render("index.html");
})