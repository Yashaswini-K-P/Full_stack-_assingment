const express = require("express");
const app = express();
const port= 8080;
const path=require("path");
const { v4: uuidv4}= require('uuid');
var methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username:"yashu",
        content:"Joined DSU",
    },
    {
        id: uuidv4(),
        username:"Pavan",
        content:"ranked 3rd in Karnnataka with 99.8% in SSLC",
    },
    {
        id: uuidv4(),
        username:"puttraju",
        content:"A new member XUV700 joined our family",
    },
];
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    res.render("show.ejs", {post});
});


 app.patch("/posts/:id", (req, res)=>{
    let { id }=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    res.redirect("/posts");
 });

 app.delete("/posts/:id", (req, res)=>{
    let { id }=req.params;
    posts=posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
 });

 app.get("/posts/:id/edit", (req, res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("edit.ejs", {post} );
 })

app.post("/posts", (req, res)=>{
    let id=uuidv4();
    let {username, content}=req.body;
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("listening to port: 8080");
});