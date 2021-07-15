class Api::V1::GameGenresController < ApplicationController
  before_action :set_gg, only: [:create]
  # acts_as_token_authentication_handler_for User, only: [:create, :destroy]

  def create
    if @gg.present?
      render json: { status: 'Error', message: 'Jogo já possui está categoria'}, status: :ok
    else
      gg = GameGenre.create(gg_params)
      gg.game_id = @game.id
      if gg.save
        render json: gg, status: :created
      else
        render json: gg.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    if GameGenre.exists?(params[:id])
      if GameGenre.find(params[:id]).destroy
        render json: {status: 'Success', message: 'Categoria removido'}
      else
        render json: { status: 'Error', message: 'Falha ao remover categoria'}, status: :unprocessable_entity
      end
    else
      render json: { status: 'Error', message: 'Falha ao encontrar o jogo'}, status: :not_found
    end
  end

  private
  def gg_params
    params.require(:game_genre).permit(:genre_id)
  end

  def set_gg
    unless Game.exists?(params[:id])
      render json: { status: 'Error', message: 'Falha ao encontrar o jogo'}, status: :not_found
    else
      @game = Game.find params[:id]
      @gg = GameGenre.find_by(game_id: @game.id, genre_id: gg_params[:genre_id])
    end
  end
end
