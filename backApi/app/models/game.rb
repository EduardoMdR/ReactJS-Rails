class Game < ApplicationRecord
    # Database relationships:
    has_many :wishlist, dependent: :destroy
    has_many :game_genres, dependent: :destroy
    has_many :genres, through: :game_genres

    # Database validations:
    validates :name, length:{minimum: 2}, presence: true
    validates :price, presence: true
    # validates :realese_date, presence: true
end
