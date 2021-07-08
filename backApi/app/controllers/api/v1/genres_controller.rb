class Api::V1::GenresController < ApplicationController
  before_action :set_genre, only: [:show, :update]
  
  acts_as_token_authentication_handler_for User, only: [:update]
  before_action :isAdmin?, only: [:update]

  def index
    genre = Genre.all
    render json: genre
  end

  def show
    gg = GameGenre.where(genre_id: @genre.id)
    unless gg.exists?
      render json: { status: 'Vazio', message: 'Gênero não possui nenhum jogo ainda'}, status: :ok
    else
      render json: gg
    end
    # render json: {name: @genre.name, description: @genre.description}
  end

  def update
    if @genre.update(genre_params)
      render json: @genre
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  private
  def set_genre
    unless Genre.exists?(params[:id])
      render json: { status: 'Error', message: 'Falha ao encontrar está categoria'}, status: :not_found
    else
      @genre = Genre.find(params[:id])
    end
  end

  def genre_params
    params.require(:genre).permit(:name, :description)
  end
end
