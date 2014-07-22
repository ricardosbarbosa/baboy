app = angular.module('controller', []);

// app.controller('ContaCtrl', ['$scope', '$modal', 'Phone',function ($scope, $modal) {
//   $scope.date = new Date();
//   $scope.contas = contas;
//   $scope.transacoes = transacoes;

  

//   $scope.open = function (size) {
//     // alert(size);
//     var modalInstance = $modal.open({
//       templateUrl: 'partials/conta-detalhe.html',
//     //   controller: ModalInstanceCtrl,
//       size: size,
//     //   resolve: {
//     //     items: function () {
//     //       return $scope.items;
//     //     }
//     //   }
//     });

//     // modalInstance.result.then(function (selectedItem) {
//     //   $scope.selected = selectedItem;
//     // }, function () {
//     //   $log.info('Modal dismissed at: ' + new Date());
//     // });
//   };
  
// }]);

app.controller('ModalTransacaoCtrl', ['$scope','Transacao', function ($scope, Transacao) {
  $scope.transacao = new Transacao();

  $scope.update = function(transacao) {
    $scope.transacao = new Transacao(transacao);
    $scope.transacao.$save();
  };

  $scope.reset = function() {
    $scope.transacao = {};
  };

  // $scope.isUnchanged = function(transacao) {
  //   return angular.equals(user, $scope.master);
  // };

  $scope.transacao;
}]);

app.controller('MovimentacoesCtrl', ['$scope','$modal', '$sce', 'Transacao', function ($scope, $modal, $sce, Transacao) {
    $scope.filterDate = new Date();
    $scope.contas = contas;
    // $scope.movimentacoes = transacoes;
    // m = Transacao.get({id: 21});
    $scope.movimentacoes = Transacao.query();
    // Transacao.query(function(data) {
    //   $scope.movimentacoes = data;
    // });
    //$scope.totalLivreCredito = 0;
    $scope.filtro = '';

    $scope.changedate = function(value){
      $scope.filterDate.setMonth( $scope.filterDate.getMonth( ) + value );
      $scope.movimentacoes = Transacao.search({data: $scope.filterDate}, function(result){}); 
    };

    
    $scope.$watch('movimentacoes', function() {
      // credtio total e credito efetuado
      var totalLivre = 0;
      var totalEfetuado = 0;
      if ($scope.movimentacoes){
        $scope.movimentacoes.forEach(function(item) {
          if (item.tipo == 'credito'){
            totalLivre += +item.valor;
            if (item.efetuado)
              totalEfetuado += +item.valor;
          }
        });
        $scope.totalLivreCredito = totalLivre;
        $scope.totalEfetuadoCredito = totalEfetuado;

        // debito total e debito efetuado
        var totalLivreDebito = 0;
        var totalEfetuadoDebito = 0;
        $scope.movimentacoes.forEach(function(item) {
          if (item.tipo == 'debito'){
            totalLivreDebito += +item.valor;
            if (item.efetuado)
              totalEfetuadoDebito += +item.valor;
          }
        });
        $scope.totalLivreDebito = totalLivreDebito;
        $scope.totalEfetuadoDebito = totalEfetuadoDebito;

        //saldo
        $scope.saldoLivre = $scope.totalLivreCredito - $scope.totalLivreDebito;
        $scope.saldoEfetuado = $scope.totalEfetuadoCredito - $scope.totalEfetuadoDebito;
      }
    }, true);

    $scope.efetuado = function(movimentacao){
      movimentacao.efetuado = !movimentacao.efetuado;
    };

    $scope.open = function (size) {
    // alert(size);
    var modalInstance = $modal.open({
      templateUrl: './modals/transacao.html',
      controller: 'ModalTransacaoCtrl',
      // size: size,
    //   resolve: {
    //     items: function () {
    //       return $scope.items;
    //     }
    //   }
    });

    // modalInstance.result.then(function (selectedItem) {
    //   $scope.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });
  };

  // $scope.$watch('filtro', function(tipo) {
  //   alert(2);
  //   $scope.filtro = tipo;
  // }, true);

  $scope.filtrar = function(tipo){
    $scope.filtro = {tipo: tipo};
  };
  
  $scope.doPeriodo = function(movimentacao){
    return movimentacao.date.getMonth() == $scope.filterDate.getMonth( );
  };

}]);

contas = [{
  id: 1,
  nome: 'dinheiro',
  saldo: 100
}];

transacoes = [
  {
    tipo: 'debito',
    valor: 500,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: true,
    conta_id: 1
  },
  {
    tipo: 'credito',
    valor: 1500,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: true,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'credito',
    valor: 1000,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date(),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date('2014-05-14T00:00:00'),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date('2014-07-14T00:00:00'),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    data: new Date('2014-08-14T00:00:00'),
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
];