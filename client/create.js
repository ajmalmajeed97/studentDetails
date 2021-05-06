app.service('newOne',function(){
    this.add=function($http,$scope,v){
     if(($scope.name&&$scope.age&&$scope.roll))
     {       
             let data ={name:$scope.name,
                 age:$scope.age,
                 roll:$scope.roll}
                 data=JSON.stringify(data)
             $http.post('http://localhost:4000/create',data)
             .then(function (response) {
             if(response.data!=1)
              { 
                v.push({name:$scope.name,age:$scope.age,roll:$scope.roll})
                $scope.students=v
              }
              else{
                $scope.name="";
                $scope.age="";
                $scope.roll="";
              }
              
             }).catch(err=>{
                 console.log(err);
             })     
            }   
    }
    })