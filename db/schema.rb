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

ActiveRecord::Schema.define(version: 2019_07_26_033530) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "border_points", force: :cascade do |t|
    t.float "lat"
    t.float "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "neighbourhood_id"
    t.index ["neighbourhood_id"], name: "index_border_points_on_neighbourhood_id"
  end

  create_table "google_opening_hours", force: :cascade do |t|
    t.integer "open_day"
    t.string "open_time"
    t.integer "close_day"
    t.string "close_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_google_opening_hours_on_place_id"
  end

  create_table "google_photos", force: :cascade do |t|
    t.integer "height"
    t.integer "width"
    t.string "photo_reference"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_google_photos_on_place_id"
  end

  create_table "google_reviews", force: :cascade do |t|
    t.string "author_name"
    t.string "author_url"
    t.integer "rating"
    t.string "relative_time_description"
    t.string "text"
    t.integer "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_google_reviews_on_place_id"
  end

  create_table "neighbourhoods", force: :cascade do |t|
    t.string "name"
    t.float "centerlat"
    t.float "centerlong"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "google_id"
    t.string "name"
    t.string "address"
    t.float "lat"
    t.float "long"
    t.float "rating"
    t.integer "rating_n"
    t.string "phone_number"
    t.integer "current_popularity"
    t.integer "time_spent_min"
    t.integer "time_spent_max"
    t.string "postal_code"
    t.integer "google_price_level"
    t.string "yelp_id"
    t.string "yelp_url"
    t.string "yelp_phone"
    t.string "yelp_display_phone"
    t.integer "yelp_review_count"
    t.integer "yelp_rating"
    t.string "yelp_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "neighbourhood_id"
    t.index ["neighbourhood_id"], name: "index_places_on_neighbourhood_id"
  end

  create_table "popular_times", force: :cascade do |t|
    t.integer "day_id"
    t.integer "hour_id"
    t.integer "busy_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_popular_times_on_place_id"
  end

  create_table "time_waits", force: :cascade do |t|
    t.integer "day_id"
    t.integer "hour_id"
    t.integer "wait_minutes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_time_waits_on_place_id"
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_types_on_place_id"
  end

  create_table "yelp_categories", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_yelp_categories_on_place_id"
  end

  create_table "yelp_opening_hours", force: :cascade do |t|
    t.boolean "is_overnight"
    t.string "start"
    t.string "end"
    t.integer "day"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_yelp_opening_hours_on_place_id"
  end

  create_table "yelp_photos", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_yelp_photos_on_place_id"
  end

  create_table "yelp_reviews", force: :cascade do |t|
    t.string "review_id"
    t.string "url"
    t.string "text"
    t.integer "rating"
    t.string "time_made"
    t.string "user_id"
    t.string "user_profile"
    t.string "user_image"
    t.string "user_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "place_id"
    t.index ["place_id"], name: "index_yelp_reviews_on_place_id"
  end

  add_foreign_key "border_points", "neighbourhoods"
  add_foreign_key "google_opening_hours", "places"
  add_foreign_key "google_photos", "places"
  add_foreign_key "google_reviews", "places"
  add_foreign_key "places", "neighbourhoods"
  add_foreign_key "popular_times", "places"
  add_foreign_key "time_waits", "places"
  add_foreign_key "types", "places"
  add_foreign_key "yelp_categories", "places"
  add_foreign_key "yelp_opening_hours", "places"
  add_foreign_key "yelp_photos", "places"
  add_foreign_key "yelp_reviews", "places"
end
