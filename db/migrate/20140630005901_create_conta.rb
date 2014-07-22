class CreateConta < ActiveRecord::Migration
  def change
    create_table :conta do |t|
      t.string :nome
      t.decimal :saldo

      t.timestamps
    end
  end
end
