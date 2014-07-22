json.array!(@transacoes) do |transacao|
  
  json.merge! transacao.attributes
  json.url api_transacao_url(transacao, format: :json)
  json.url api_transacao_url(transacao, format: :json)
  json.extract! transacao, :id
end
