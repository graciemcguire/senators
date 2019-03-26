class CreateSenators < ActiveRecord::Migration[5.2]
  def change
    create_table :senators do |t|
      t.string "name"
      t.string "state"
      t.string "party"
      t.string "naacp_rating"
      t.string "pp_rating"
      t.string "envi_rating"
      t.string "nra_rating"
      t.string "trump_rating"
      t.string "contact"
      t.string "image"
      t.timestamps
    end
  end
end
