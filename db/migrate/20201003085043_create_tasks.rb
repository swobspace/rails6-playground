class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.date :start
      t.date :deadline
      t.string :subject
      t.string :responsible

      t.timestamps
    end
  end
end
