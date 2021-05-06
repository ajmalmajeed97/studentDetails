const express = require('express')
const app = express()
const router=express.Router()
const mongoose  = require('mongoose')
const Student=  require('../model/db')


router.get('/home',(req,res)=>{
    Student.aggregate([{$match:{}},{$limit:100}])
    .then((data)=>{
        res.json({data})
    }).catch(err=>{
        res.status(404).send('Operation failed '+err)
    })   
    })


    
    router.post('/create',(req,res)=>{
       const {name,age,roll}=req.body
      
       if(!(name&&age&&roll))
       res.send('please fill all the fields');
       let marks=[]
       const bulk=Student.collection.initializeUnorderedBulkOp();
       bulk.find({roll:roll}).upsert().updateOne(
           {$setOnInsert:{
               name,
               age,
               roll,
               marks
           }})

           bulk.execute().then(response=>{
            res.json(response.result.nMatched);
          }).catch(err=>{
              
            res.status(404).send('Operation failed '+err)
          })  
        })

        router.post('/addMarks',(req,res)=>{
         let marks=req.body.marks
         console.log(marks)
         Student.updateOne({_id:req.body.id},{$push:{marks:{subject:marks.subject,mark:marks.mark}}})
         .then(result=>{ 
           res.status(200).send('successfully added marks')
         }).catch(err=>{
              
          res.status(404).send('Error could not add marks to the database '+err)
        })  

        })
         

        //Subjectwise Topper

        router.get("/topper/:subject",(req,res)=>{
          let query=req.params.subject
          if(query=='english'||query=='physics'||query=='maths'){
          Student.aggregate([
           {$unwind:"$marks"},
           {$match:{"marks.subject":query}},
           {$sort:{"marks.mark":-1}},
           {$project:{_id:0,name:1,marks:1}}
          ])
          .then(result=>{
            res.send(result)
          }).catch(err=>{
            res.status(404).send('Operation failed '+err)
          })
       }
       else
       res.status(404).send('enter valid subjects,for example [physics,maths,english]')
        })

       

        router.delete('/home/:id',(req,res)=>{
            Student.deleteOne({
              _id: req.params.id,
            })
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                res.status(404).send('Operation failed '+err)
            })     
    });



       router.post('/seed',(req,res)=>{
       let batch=Student.collection.initializeUnorderedBulkOp();

        for (let i=0;i<10000;i++) {
            batch.find({roll:String(i)}).upsert().update(
                {$setOnInsert:{
                    name:String(i+2),
                    age:String(i+1),
                    roll:String(i)
                }})
          }

          batch.execute().then(res=>{
            res.status(200).send('Operation succesfull');
          }).catch(err=>{
            res.status(404).send('Operation failed '+err)
          })   
    }) 
       

    router.post('/search',(req,res)=>{
      const elements=req.body
      Student.aggregate([{$match:{roll:{$in:elements}}}])
      .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
      
})


module.exports = router