class CreateTransacoes < ActiveRecord::Migration
  def change
    create_table :transacoes do |t|
      t.belongs_to :conta, index: true
      t.string :tipo
      t.decimal :valor
      t.date :data
      t.string :descricao
      t.string :categoria
      t.boolean :efetuado

      t.timestamps
    end
  end
end
