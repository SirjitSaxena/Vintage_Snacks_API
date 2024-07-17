import express from 'express'
import  mongoose  from 'mongoose';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from'./Routes/cart.js'
import addressRouter from './Routes/address.js'
import bodyParser from 'express'
import cors from 'cors'

const app=express();
app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true 
}))

app.get('/',(req,res)=>res.json({mess:"Home route"}))
app.use('/api/user',userRouter)

app.use('/api/product',productRouter)

app.use('/api/cart',cartRouter)

app.use('/api/address',addressRouter)

mongoose.connect("mongodb+srv://saxenasirjit14112001:2JlEkXDz0qzaB8Ii@cluster0.c7dulbh.mongodb.net/",{dbName:"MERN_E_Commerce"}).then(()=>console.log("MongoDB Connected Successfully...")).catch((err)=>console.log(err));

const port=1000;
app.listen(port,()=>console.log(`Server port ${port}`))