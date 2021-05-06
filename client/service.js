app.service('prime',function(){
  this.del=function(id,index,$http,v){
    $http.delete(`http://localhost:4000/home/${id}`)
      .then(res=> {
       v.splice(index,1)
       return v;
   }).catch(error=>{
     console.log(error);
   })
  }
  })


  /*
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-route/1.8.2/angular-route.min.js"integrity="sha512-5zOAub3cIpqklnKmM05spv4xttemFDlbBrmRexWiP0aWV8dlayEGciapAjBQWA7lgQsxPY6ay0oIUVtY/pivXA=="crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-sanitize.js"></script>
    <script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-2.5.0.js"></script>
    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    $scope.name=$scope.outerForm.$$controls[0].$viewValue
            $scope.age=$scope.outerForm.$$controls[1].$viewValue
            $scope.roll=$scope.outerForm.$$controls[2].$viewValue
  */