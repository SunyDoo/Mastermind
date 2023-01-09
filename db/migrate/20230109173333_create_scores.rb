class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :attempts
      t.integer :time

      t.timestamps
    end
  end
end