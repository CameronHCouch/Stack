class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      t.boolean :is_dm, null: false, default: false
      t.integer :workspace_id

      t.timestamps
    end
    add_index :channels, :workspace_id
    add_index :channels, :name
  end
end
