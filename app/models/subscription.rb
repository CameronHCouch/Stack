# == Schema Information
#
# Table name: subscriptions
#
#  id                :bigint(8)        not null, primary key
#  member_id         :integer          not null
#  subscribable_id   :integer          not null
#  subscribable_type :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Subscription < ApplicationRecord
  validates :member_id, :subscribable_id, :subscribable_type, presence: true

  belongs_to :member,
    foreign_key: :member_id,
    class_name: 'User'
    
  belongs_to :subscribable, polymorphic: true
end
