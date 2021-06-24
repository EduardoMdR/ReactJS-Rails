class ApplicationController < ActionController::API
  def isAdmin?
    unless current_user.role_id == 1
      render json: { status: 'Error', message: 'Acesso negado'}, status: :forbidden
    end
  end
end
