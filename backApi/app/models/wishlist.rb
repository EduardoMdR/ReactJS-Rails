class Wishlist < ApplicationRecord
  # Database relationships:
  belongs_to :user
  belongs_to :game
end
