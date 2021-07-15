class User < ApplicationRecord
  # Token Authenticatable
  acts_as_token_authenticatable
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Database relationships:
  belongs_to :role
  has_many :wishlist, dependent: :destroy
  has_one_attached :image

  # Database validations:
  validates :email, uniqueness: true, presence: true
  # validates :role_id, inclusion: { in: 0..1 }

end
