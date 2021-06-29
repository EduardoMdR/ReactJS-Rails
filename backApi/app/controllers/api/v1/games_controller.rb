class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy, :wishlist, :destroy_wishlist]
  
  acts_as_token_authentication_handler_for User, only: [:create, :update, :destroy, :wishlist, :destroy_wishlist]
  before_action :isAdmin?, only: [:create, :update, :destroy]

  def index
    game = Game.all
    render json: game
  end

  def show
    render json: {name: @game.name, price: @game.price}
  end

  def create
    game = Game.create(game_params)
    if game.save
      render json: game, status: :created
    else
      render json: game.errors, status: :unprocessable_entity
    end
  end

  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @game.destroy
      render json: {status: 'Success', message: 'Jogo apagado com sucesso'}
    else
      render json: { status: 'Error', message: 'Falha ao apagar o jogo'}, status: :unprocessable_entity
    end
  end

  # Wishlist
  def wishlist
    user = current_user.id
    if Wishlist.find_by(game_id: @game.id, user_id: user).present?
      render json: { status: 'Error', message: 'Jogo já está na sua lista de desejo'}, status: :ok
    else
      wishlist = Wishlist.create(game_id: @game.id, user_id: user)
      if wishlist.save
        render json: wishlist, status: :created
      else
        render json: wishlist.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy_wishlist
    user = current_user.id
    if Wishlist.find_by(game_id: @game.id, user_id: user).present?
      wishlist = Wishlist.find_by(game_id: @game.id, user_id: user)
      if wishlist.destroy
        render json: {status: 'Success', message: 'Jogo removido da sua lista de desejo'}
      else
        render json: { status: 'Error', message: 'Falha ao remover jogo da sua lista de desejo'}, status: :unprocessable_entity
      end
    else
      render json: { status: 'Error', message: 'Falha ao encontrar o jogo na lista de desejo'}, status: :not_found
    end
  end

  private
  def set_game
    unless Game.exists?(params[:id])
      render json: { status: 'Error', message: 'Falha ao encontrar o jogo'}, status: :not_found
    else
      @game = Game.find(params[:id])
    end
  end

  def game_params
    params.require(:game).permit(:name, :price, :description, :trailer, :realese_date)
  end
end