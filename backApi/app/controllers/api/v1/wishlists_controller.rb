class Api::V1::WishlistsController < ApplicationController
  # acts_as_token_authentication_handler_for User

  # before_action :set_wishlist, only: [:show, :update, :destroy]

  def show
    wishlist = Wishlist.where(user_id: 2)
    if wishlist.nil?
      render json: { status: 'Vazio', message: 'Sua lista de desejo está vazia'}, status: :ok
    else
      # wishlist.each do |lista|

      # end
      render json: wishlist #{game: Game.find(wishlist.game_id)}
    end
  end
end
