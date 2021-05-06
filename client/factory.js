
app.factory('Student', function ($http) {

  function Student(name,age,roll) {
    var self = this;
    self.name = name || "";
    self.age = age || "";
    self.roll = roll || "";
  }
  

  Student.prototype = {

    fetchStudent:function(){
      return $http({url: 'http://localhost:4000/home',type: 'GET'})
    },
    
   addStudent: function () {
     var self=this
    let data={name:self.name,age:self.age,roll:self.roll}
    data=JSON.stringify(data)

    return   $http.post('http://localhost:4000/create',data)
  },

  deleteStudent: function (id) {
  
     return  $http.delete(`http://localhost:4000/home/${id}`)
  },

  searchStudent: function (elements) {
   return $http.post('http://localhost:4000/search',elements)
  },

  findTopper: function (subject) {

    return $http.get(`http://localhost:4000/topper/${subject}`)
  },

     
}
return Student

});
















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

  
    }*/
