const express= require("express")
const cors= require("cors")
const mongoose= require("mongoose")

const app=express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())




const DB = 'mongodb+srv://NilamLokhande:Nil23lok@cluster0.2aauuox.mongodb.net/plantinghelp?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
  console.log('connection successful');
}).catch((err) => console.log(err));





app.listen(9001, ()=>{
    console.log("starting server on port 9001")
})


app.use("/", require("./routes/loginroute"));

