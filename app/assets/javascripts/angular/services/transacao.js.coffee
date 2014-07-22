AppService.factory 'Transacao', ['$resource', ($resource) ->
  $resource '/api/transacoes/:id', id: '@id'
  Transacao = $resource('/api/transacoes/:id',
    {id: '@id'}, 
    {
      search: {method: 'GET',params: {dara: "@search"},isArray: true }
    }
  ); 
  
]