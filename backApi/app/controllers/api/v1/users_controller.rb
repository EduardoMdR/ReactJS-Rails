class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # acts_as_token_authentication_handler_for User, only: [:update, :destroy]
  # before_action :isAdmin?, only: [:index]

  def index
    user = User.all
    render json: user
  end

  def show
    render json: @user
  end

  def create
    user = User.create(user_params)
    user.role_id = 2
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @user.destroy
      render json: {status: 'Success', message: 'Usuário apagado com sucesso'}
    else
      render json: { status: 'Error', message: 'Falha ao apagar conta'}, status: :unprocessable_entity
    end
  end

  private
  def set_user
    unless User.exists?(params[:id])
      render json: { status: 'Error', message: 'Falha ao encontrar usuário'}, status: :not_found
    else
      @user = User.find(params[:id])
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
  end
end
