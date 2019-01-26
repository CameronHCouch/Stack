class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :member_id, null: false
      t.integer :subscribable_id, null: false
      t.string :subscribable_type, null: false

      t.timestamps
    end

    add_index :subscriptions, :member_id
    add_index :subscriptions, :subscribable_id
    add_index :subscriptions, [:subscribable_id, :subscribable_type]
  end
end