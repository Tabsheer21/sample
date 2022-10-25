import express from "express"

const app = express();
app.use(express.json());

app.get("/" , (req, res) =>{
    res.send("WELCOME TO MY WEBSITE")
})

app.get("/live" , (req, res) =>{
    res.send("WELCOME TO LIVE!")
})

app.listen(3000, () =>{
    console.log("LISTENING TO PORT 3000")
})