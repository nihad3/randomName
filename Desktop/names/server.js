import express from 'express';
import names from './names.json' assert { type: 'json' };

const app= express()

app.use('/name',(req,res)=>{ 
 const name = names[Math.round(Math.random()* names.length)]
return res.json(name)

})
app.listen(3000,()=>{
    console.log('active on port 3000');
})
