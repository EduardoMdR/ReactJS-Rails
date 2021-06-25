class Game < ApplicationRecord
    # Database relationships:
    has_many :wishlist
    # has_many :game_genre, dependent: :destroy

    # Database validations:
    validates :name, length:{minimum: 2}, presence: true
    validates :price, presence: true
    # validates :realese_date, presence: true
end
