class User < ApplicationRecord
  # Token Authenticatable
  acts_as_token_authenticatable
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Database relationships:
  belongs_to :role

   # Database validations:
  validates :email, uniqueness: true, presence: true
end
