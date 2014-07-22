# This file should contain all the record creation needed to seed the datebase with its default values.
# The date can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
contas = Conta.create([
  {
    id: 1,
    nome: 'dinheiro',
    saldo: 100
  }
])

transacoes = Transacao.create([
  {
    tipo: 'debito',
    valor: 500,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: true,
    conta_id: 1
  },
  {
    tipo: 'credito',
    valor: 1500,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: true,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'credito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today ,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
  {
    tipo: 'debito',
    valor: 1000,
    date: Date.today,
    descricao: 'YYYYYYY',
    categoria: 'Alimentacao',
    efetuado: false,
    conta_id: 1
  },
])