class AddNullFalseToSubsUserColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :subscriptions, :user_id, false
  end
end
