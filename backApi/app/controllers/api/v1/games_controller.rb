class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy]

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
      render json: { status: 'Error', message: 'Falha ao encontrar o jogo'}, status: :unprocessable_entity
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