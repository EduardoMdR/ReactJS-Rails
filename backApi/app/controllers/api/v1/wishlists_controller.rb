class Api::V1::WishlistsController < ApplicationController
  acts_as_token_authentication_handler_for User

  # before_action :set_wishlist, only: [:show, :update, :destroy]

  def show
    wishlist = Wishlist.where(user_id: params[:id])
    render json: wishlist #{game: Game.find(wishlist.game_id)}
  end
end
