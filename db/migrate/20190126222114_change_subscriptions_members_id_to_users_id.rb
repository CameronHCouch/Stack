class ChangeSubscriptionsMembersIdToUsersId < ActiveRecord::Migration[5.2]
  def change
    remove_column :subscriptions, :member_id, :integer
    add_column :subscriptions, :user_id, :integer
    add_index :subscriptions, :user_id
  end
end
