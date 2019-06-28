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

ActiveRecord::Schema.define(version: 2019_06_27_221601) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charities", force: :cascade do |t|
    t.string "name"
    t.string "desc"
    t.float "donated_balance"
    t.string "image"
  end

  create_table "donations", force: :cascade do |t|
    t.bigint "charity_id"
    t.float "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["charity_id"], name: "index_donations_on_charity_id"
  end

  create_table "goals", force: :cascade do |t|
    t.string "objective"
    t.string "desc"
    t.float "cost"
    t.boolean "completed"
    t.bigint "charity_id"
    t.index ["charity_id"], name: "index_goals_on_charity_id"
  end

  create_table "items", force: :cascade do |t|
    t.text "public_token"
    t.text "access_token"
    t.text "institution_name"
    t.text "institution_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin"
    t.string "plaid_token"
    t.string "stripe_token"
    t.float "current_roundup_balance"
    t.datetime "balance_date"
    t.integer "votes", default: [], array: true
  end

  add_foreign_key "donations", "charities"
  add_foreign_key "goals", "charities"
  add_foreign_key "items", "users"
end
