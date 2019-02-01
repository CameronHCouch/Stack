class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      Subscription.create!(user_id: current_user.id, subscribable: Workspace.first)
      Subscription.create!(user_id: current_user.id, subscribable: Workspace.first.channels[0])
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end
  
  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end