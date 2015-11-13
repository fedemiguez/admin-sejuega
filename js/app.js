// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

    .state('app.usuarios', {
      url: '/usuarios',
      views: {
        'menuContent': {
          templateUrl: 'templates/usuarios.html',
          controller: 'UsuarioslistsCtrl'
        }
      }
    })
  .state('app.usuario', {
    url: '/usuarios/:UsuarioId',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuario.html',
        controller: 'UsuarioCtrl'
      }
    }
  })
  .state('app.nuevousuario', {
      url: '/nuevousuario',
      views: {
        'menuContent': {
          templateUrl: 'templates/nuevousuario.html',
          controller: 'NuevoUsuarioCtrl'
        }
      }
    })
  .state('app.partidos', {
    url: '/partidos',
    views: {
      'menuContent': {
        templateUrl: 'templates/partidos.html',
        controller: 'PartidoslistsCtrl'
      }
    }
  })
  .state('app.partido', {
    url: '/partido/:PartidoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/partido.html',
        controller: 'PartidoCtrl'
      }
    }
  })

    .state('app.inicio', {
      url: '/inicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/inicio.html',
          controller: 'inicioCtrl'
        }
      }
    }) 
  
 .state('app.nuevopartido', {
      url: '/nuevopartido',
      views: {
        'menuContent': {
          templateUrl: 'templates/nuevopartido.html',
          controller: 'NuevoPartidoCtrl'
        }
      }
    }) 


;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
