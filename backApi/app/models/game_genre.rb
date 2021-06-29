class GameGenre < ApplicationRecord
  # Database relationships:
  belongs_to :game
  belongs_to :genre
end
