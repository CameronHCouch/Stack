# == Schema Information
#
# Table name: channels
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  description  :string
#  is_dm        :boolean          default(FALSE), not null
#  workspace_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, length: { maximum: 21 }, presence: true

  belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: 'Workspace'

  has_many :messages,
    foreign_key: :channel_id,
    class_name: 'Message'

  has_many :subscriptions,
    foreign_key: :subscribable_id,
    class_name: 'Subscription'

  has_many :members, through: :subscriptions, source: :member, dependent: :destroy
end
