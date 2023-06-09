const express=require("express")
require("dotenv").config()
const colors=require("colors")
const todoRoutes=require("./routes/TodoRoutes")
const userRoutes=require("./routes/UserRoutes")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")

connectDB()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/todos/",todoRoutes)
app.use("/api/users/",userRoutes)
app.use(errorHandler)


app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get("/:name",(req,res)=>{
    res.send(`<h1>Hello World ${req.params.name}</h1>`)
})

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
    console.log(`server running on http://localhost:${PORT}/api/todos/`)
    console.log(`server running on http://localhost:${PORT}/api/users/`)
})
