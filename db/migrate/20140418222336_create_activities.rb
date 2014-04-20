class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title
      t.string :time
      t.text :content
      t.integer :level
      t.string :location

      t.timestamps
    end
  end
end
