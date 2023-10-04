import  express  from "express";

const app=express();

app.get('/api/employee',(req,res)=>{
let employee=[
  {
    id:1,
    name:"vishal 1",
    location:"dibai"
  },
  {
    id:12,
    name:"vishal 2",
    location:"dibai"
  },
  {
    id:123,
    name:"vishal 3",
    location:"dibai"
  },
  {
    id:1234,
    name:"vishal 4",
    location:"dibai"
  },
  {
    id:12345,
    name:"vishal 5",
    location:"dibai"
  }


]

res.send(employee);

});

const port =4000 ;

app.listen(port,()=>{
console.log(`serve at http://localhost:${port}/employee`);
});