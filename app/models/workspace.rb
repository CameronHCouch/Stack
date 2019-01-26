# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workspace < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: 'User'
  
  has_many :channels,
    foreign_key: :workspace_id,
    class_name: 'Channel'

  has_many :subscriptions,
    foreign_key: :subscribable_id,
    class_name: 'Subscription'

  has_many :members, through: :subscriptions, source: :member, dependent: :destroy
end
