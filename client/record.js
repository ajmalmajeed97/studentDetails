app.service('record',function(){
    this.details=function($http,$scope,v){
       let r= $http({
            url: 'http://localhost:4000/home',
            type: 'GET'
          }).then(res=> {
            $scope.students=res.data.data
            v=$scope.students
            return v;
          }).catch(error=>{
            console.log(error);
          })
          return r;
        }
        
    })