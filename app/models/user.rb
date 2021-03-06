# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  img_url         :string
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_save :default_vals
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :messages
  has_many :subscriptions, dependent: :destroy
  has_many :channels, through: :subscriptions, source: :subscribable, source_type: 'Channel'
  has_many :workspaces, through: :subscriptions, source: :subscribable, source_type: 'Workspace'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else 
      nil
    end 
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom::urlsafe_base64)
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  private

  def default_vals
    self.username = self.username || self.email
    self.img_url = self.img_url || "https://s3.us-east-2.amazonaws.com/couchstack/avatar#{rand(1..16)}.png"
  end
end
