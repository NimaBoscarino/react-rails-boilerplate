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

ActiveRecord::Schema.define(version: 2021_08_02_214722) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artist_categories", force: :cascade do |t|
    t.bigint "artist_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_categories_on_artist_id"
    t.index ["category_id"], name: "index_artist_categories_on_category_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "phone_number"
    t.string "password"
    t.string "image"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "phone_number"
    t.string "password"
    t.string "image"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.bigint "client_id"
    t.bigint "request_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_comments_on_client_id"
    t.index ["request_id"], name: "index_comments_on_request_id"
  end

  create_table "messages", force: :cascade do |t|
    t.boolean "client_sender?"
    t.string "content"
    t.bigint "artist_id"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_messages_on_artist_id"
    t.index ["client_id"], name: "index_messages_on_client_id"
  end

  create_table "requests", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "description"
    t.date "start_date"
    t.date "expected_finish_date"
    t.date "actual_finish_date"
    t.integer "price"
    t.bigint "client_id"
    t.bigint "artist_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_requests_on_artist_id"
    t.index ["category_id"], name: "index_requests_on_category_id"
    t.index ["client_id"], name: "index_requests_on_client_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.integer "star"
    t.bigint "artist_id"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_reviews_on_artist_id"
    t.index ["client_id"], name: "index_reviews_on_client_id"
  end

  add_foreign_key "artist_categories", "artists"
  add_foreign_key "artist_categories", "categories"
  add_foreign_key "comments", "clients"
  add_foreign_key "comments", "requests"
  add_foreign_key "messages", "artists"
  add_foreign_key "messages", "clients"
  add_foreign_key "requests", "artists"
  add_foreign_key "requests", "categories"
  add_foreign_key "requests", "clients"
  add_foreign_key "reviews", "artists"
  add_foreign_key "reviews", "clients"
end
