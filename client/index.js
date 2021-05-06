
var app=angular.module("class", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])


app.controller("controller",function($scope,Student){
  
  let v=[];
 
  $scope.student = new Student();

  $scope.student.fetchStudent()
  .then(res=>{
  $scope.students=res.data.data
  v=$scope.students
  console.log(v)
  }).catch(err=>{
    res.status(404).send('Cannot load the student details'+err)
  })


  //Adding new student details tot he database

  $scope.create=function(){
    console.log($scope)
    $scope.name=$scope.outerForm.$$controls[0].$viewValue
    $scope.age=$scope.outerForm.$$controls[1].$viewValue
    $scope.roll=$scope.outerForm.$$controls[2].$viewValue
    $scope.student = new Student($scope.name,$scope.age,$scope.roll);
    $scope.student.addStudent()
    .then(res=>{
      if(res.data!=1)
              { 
                v.push({name:$scope.name,age:$scope.age,roll:$scope.roll})
                $scope.students=v
                $scope.name="";
                $scope.age="";
                $scope.roll="";
              }
              else{
                $scope.name="";
                $scope.age="";
                $scope.roll="";
              }
    }).catch(err=>{
      res.status(404).send('cannot add given student details to the database '+err)
    })
  }

//  Deleting student record

 $scope.delete=function(id,index){

  $scope.student.deleteStudent(id)
  .then(res=> {
    v.splice(index,1)
}).catch(err=>{
  res.status(404).send('Cannot delete the student record '+err)
})
 }  

  //  Multiple Searching record by roll numbers

  $scope.multipleSearch=function(){
    let elements=$scope.outerForm.$$controls[3].$viewValue.split(',');
    $scope.student.searchStudent(elements)
    .then(function (response) {
      $scope.students=response.data
      }).catch(err=>{
        res.status(404).send('Cannot find the student records '+err)
      }) 
       $scope.searchRoll=""
         
  }


  //Finnding topper in each subject

  $scope.subject=function(){
    $scope.sub=$scope.outerForm.$$controls[4].sub.$viewValue
    
    $scope.student.findTopper($scope.sub)
    .then(res=>{
      $scope.topper=res.data[0].name
    }).catch(err=>{
      res.status(404).send('Cannot find the subject topper '+err)
    })
  }

  $scope.seed=function(){

    $scope.student.seedStudent(); 
  }

  $scope.likes=function(){
    console.log($scope)
  }
  $scope.hbo="sfsff"
 
})
  


/*
app.factory('Student', function ($http) {

    function Student(name,age,roll) {
      var student = this;
	    student.name = name || "";
	    student.age = age || "";
	    student.roll = roll || "";
    }
    

    

    Student.prototype = {

      fetchStudent:function(){
        return $http({url: 'http://localhost:4000/home',type: 'GET'})
      },
      
	   addStudent: function () {
      let data={name:this.name,age:this.age,roll:this.roll}
      data=JSON.stringify(data)

      return   $http.post('http://localhost:4000/create',data)
    }
            /*$scope.name=$scope.outerForm.$$controls[0].$viewValue
            $scope.age=$scope.outerForm.$$controls[1].$viewValue
            $scope.roll=$scope.outerForm.$$controls[2].$viewValue*/
           /* this.add=function($http,$scope,data){
              if(($scope.name&&$scope.age&&$scope.roll))
              {       
                      data=JSON.stringify(data)
                      $http.post('http://localhost:4000/create',data)
                      .then(function (response) {
                      if(response.data!=1)
                       { 
                         v.push({name:$scope.name,age:$scope.age,roll:$scope.roll})
                         $scope.students=v
                       }
                       else{
                         
                       }
                       
                      }).catch(err=>{
                          console.log(err);
                      })     
                     }  
            $scope.outerForm.$$controls[0].$modelValue=""
          
          }
        
      },*/
	  /*
      deleteStudent: function (id,index) {
        this.del=function(id,index,$http,v){
          $http.delete(`http://localhost:4000/home/${id}`)
            .then(res=> {
             v.splice(index,1)
             return v;
         }).catch(error=>{
           console.log(error);
         })
        }
		
      },
	  
      searchStudent: function ( {
        let elements=$scope.searchRoll.split(',');
    elements=JSON.stringify(elements)
    $http.post('http://localhost:4000/search',elements)
   .then(function (response) {
   $scope.students=response.data
   console.log($scope.students)
   }).catch(err=>{
       console.log(err);
   }) 
    $scope.searchRoll=""
      },
	  
      findTopper: function () {
        $http.get(`http://localhost:4000/topper/${$scope.sub}`)
        .then(res=>{
          $scope.topper=res.data[0].name
        }).catch(err=>{
          console.log(err)
        })
	
		
      },
	  
      seedStudent: function () {
        $http.post('http://localhost:4000/seed')
	
		
      }
     
	}
  return Student
  
  });*/
