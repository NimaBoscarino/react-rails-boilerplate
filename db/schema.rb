# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_07_25_024435) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_statuses", force: :cascade do |t|
    t.string "status", null: false
    t.boolean "fave_books", default: false
    t.string "book_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_book_statuses_on_user_id"
  end

  create_table "friends", force: :cascade do |t|
    t.bigint "follower_id", null: false
    t.bigint "following_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id"], name: "index_friends_on_follower_id"
    t.index ["following_id"], name: "index_friends_on_following_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "rating", null: false
    t.string "review"
    t.integer "time_spent"
    t.integer "book_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.integer "awards", default: 0
    t.integer "followers", default: 0
    t.integer "following", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "book_statuses", "users"
  add_foreign_key "friends", "users", column: "follower_id"
  add_foreign_key "friends", "users", column: "following_id"
  add_foreign_key "posts", "users"
end
