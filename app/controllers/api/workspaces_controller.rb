class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = current_user.workspaces
  end

  def show
    @workspace = Workspace.find(params[:id])
  end

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.admin_id = current_user.id

    if @workspace.save
      Subscription.create!(user_id: current_user.id, subscribable: @workspace)

      general_chat = Channel.create!(name: '#general', description: 'Company-wide announcements and work-based matters', workspace_id: @workspace.id)
      Subscription.create!(user_id: current_user.id, subscribable: general_chat)
      
      render "api/workspaces/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def workspace_params
    params.require(:workspace).permit(:name)
  end
end