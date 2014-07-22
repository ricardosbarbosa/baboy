# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140630012202) do

  create_table "conta", force: true do |t|
    t.string   "nome"
    t.decimal  "saldo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "nomes", force: true do |t|
    t.decimal  "saldo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "transacaos", force: true do |t|
    t.integer  "conta_id"
    t.string   "tipo"
    t.decimal  "valor"
    t.date     "data"
    t.string   "descricao"
    t.string   "categoria"
    t.boolean  "efetuado"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "transacaos", ["conta_id"], name: "index_transacaos_on_conta_id"

  create_table "transacoes", force: true do |t|
    t.integer  "conta_id"
    t.string   "tipo"
    t.decimal  "valor"
    t.date     "date"
    t.string   "descricao"
    t.string   "categoria"
    t.boolean  "efetuado"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "transacoes", ["conta_id"], name: "index_transacoes_on_conta_id"

end
