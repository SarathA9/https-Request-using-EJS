import  express  from "express";
const app=express();
const port=3000;

app.get("/", (req, res) => {
    // res.send("Hello World!")
    console.log(req.rawHeaders);
    // const printout=req;
    res.send("<h1>YOU CAN GET THE DIFFERENT PAGES DYNAMICALLY USING THE https REQUEST<h1/><br><h2>http://localhost:3000/home <br>http://localhost:3000/about <br>http://localhost:3000/contact</h2><style>body{background-color:#141E46;color:rgb(0, 255, 128);font-family:sans-serif;text-align:center;margin-top:50vh}</style>");
});

app.get("/home",(req,res)=>{
    res.send("<h1>EXPRESS JS </h1><h2>THIS IS THE ABOUT PAGE</h2><button>KNOW MORE</button><style>body{background-color:#141E46;color:rgb(0, 255, 128);font-family:sans-serif;text-align:center;margin-top:50vh}</style>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>EXPRESS JS</h1><h2>THIS IS THE ABOUT PAGE</h2><style>body{background-color:#141E46;color:rgb(0, 255, 128);font-family:sans-serif;text-align:center;margin-top:50vh}</style>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>EXPRESS JS</h1><h2>THIS IS THE CONTACT PAGE</h2><style>body{background-color:#141E46;color:rgb(0, 255, 128);font-family:sans-serif;text-align:center;margin-top:50vh}</style>");
});
app.listen(port,() =>{
    console.log(`The server is running at ${port}`);

});
