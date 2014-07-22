class RenameColumnFromDataToDateTransacoes < ActiveRecord::Migration
  def change
  	rename_column :transacoes, :data, :date
  end
end
