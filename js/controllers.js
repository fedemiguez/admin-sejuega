angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('UsuarioslistsCtrl', function($scope, $http, $location) {

    $scope.user = [];
    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
    $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      $location.path('/app/inicio');
      console.error('ERR', err);
      
      // err.status will contain the status code
    });

    $scope.doLogout = function(){
    $http.get('http://sejuega.herokuapp.com/logout', {withCredentials: true}).then(function(resp) {
    $scope.user = resp.data.data;
    $location.path('/app/inicio');

    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });

        }

  $scope.usuarios = [];
   $scope.$on('$ionicView.beforeEnter', function() {
    $http.get('http://sejuega.herokuapp.com/usuario').then(function(resp) {
      $scope.usuarios = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
  });



})

.controller('UsuarioCtrl', function($scope, $stateParams, $http, $location) {


    $scope.user = [];
    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
    $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      $location.path('/app/inicio');
      console.error('ERR', err);

      // err.status will contain the status code
    });

  $scope.usuario = {};

  $http.get('http://sejuega.herokuapp.com/usuario/'+ $stateParams.UsuarioId).then(function(resp) {
    $scope.usuario = resp.data.data;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });



  $scope.doSave = function() {
    $http.put('http://sejuega.herokuapp.com/usuario/'+ $stateParams.UsuarioId, $scope.usuario).then(function(resp) {
      console.log(resp.data);
      $location.path('/app/usuarios');
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });

  };

  $scope.doDelete = function() {
    $http.delete('http://sejuega.herokuapp.com/usuario/'+ $stateParams.UsuarioId, $scope.usuario).then(function(resp) {
      console.log(resp.data);
      $location.path('/app/usuarios');
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
  };



})

.controller('NuevoUsuarioCtrl', function($scope, $stateParams, $http, $ionicPopup, $location ) {

      $scope.user = [];

    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
      $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      console.error('ERR', err);
      $location.path('/app/inicio');
      // err.status will contain the status code
    });  



        $scope.user={};
        $scope.user.picture='';
        $scope.user.name='';
        $scope.user.email='';
        $scope.user.id =''; 
  
   $scope.doRegister = function() {
      $http.post('http://sejuega.herokuapp.com/usuario',$scope.user ).then(function(resp) {
        console.log(resp.data);
         var alertPopup = $ionicPopup.alert({
             title: 'Usuario Creado con exito',
             template: 'Ingresa ahora'
           });
           alertPopup.then(function(res) {
             $location.path('/app/usuarios');
           });
          
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
    };
  
})

.controller('PartidoslistsCtrl', function($scope, $http) {

      $scope.user = [];

    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
      $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      console.error('ERR', err);
      $location.path('/app/inicio');
      // err.status will contain the status code
    });

  $scope.partidos = [];
  $scope.$on('$ionicView.beforeEnter', function() {
  $http.get('http://sejuega.herokuapp.com/partidos').then(function(resp) {
  $scope.partidos = resp.data.data;
    console.log('Succes', resp.data.data);
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
  });
})

.controller('PartidoCtrl', function($scope, $stateParams, $http, $location) {

      $scope.user = [];

    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
      $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      console.error('ERR', err);
      $location.path('/app/inicio');
      // err.status will contain the status code
    });


  $scope.partido  = {};

  $http.get('http://sejuega.herokuapp.com/partidos/'+ $stateParams.PartidoId).then(function(resp) {
    $scope.partido = resp.data.data;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });

  $scope.doSave = function() {
    $http.put('http://sejuega.herokuapp.com/partidos/'+ $stateParams.PartidoId, $scope.partido).then(function(resp) {
      console.log(resp.data);
      $location.path('/app/avisos');
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });

  };

   $scope.doDelete = function() {
    $http.delete('http://sejuega.herokuapp.com/partidos/'+ $stateParams.PartidoId, $scope.partido).then(function(resp) {
      console.log(resp.data);
      $location.path('/app/avisos');
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
  };

})


.controller('NuevoPartidoCtrl', function($scope, $stateParams, $http, $ionicPopup, $location ) {
  
      $scope.user = [];

    $http.get('http://sejuega.herokuapp.com/me', {withCredentials: true}).then(function(resp) {
      $scope.user = resp.data.data;
      console.log('Succes', resp.data.data);
    }, function(err) {
      console.error('ERR', err);
      $location.path('/app/inicio');
      // err.status will contain the status code
    });

        $scope.partidos={};
        $scope.partidos.nombre='';
        $scope.partidos.participantes='';
        $scope.partidos.fecha='';
  
   $scope.doCreate = function() {
      $http.post('http://sejuega.herokuapp.com/partidos',$scope.partidos ).then(function(resp) {
        console.log(resp.data);
         var alertPopup = $ionicPopup.alert({
             title: 'Anuncio Creado con exito',
             template: 'Vea su anuncion publicado'
           });
           alertPopup.then(function(res) {
             $location.path('/app/avisos');
           });
          
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
    };
  
})

.controller('inicioCtrl', function($scope, $stateParams, $http, $ionicPopup, $location ) {
 
  $scope.user={};
  $scope.user.email='';
  $scope.user.password ='';


 $scope.doLogin = function() {
      $http.post('http://sejuega.herokuapp.com/login',$scope.user, {withCredentials: true}).then(function(resp) {
        console.log(resp.data);

          $location.path('/app/usuarios');

    }, function(err) {
      console.error('ERR', err);

       var alertPopup = $ionicPopup.alert({
             title: "No se Pudo Loguear",
           });
      // err.status will contain the status code
    });
    };
});


  