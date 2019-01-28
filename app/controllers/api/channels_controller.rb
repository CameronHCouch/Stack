class Api::ChannelsController < ApplicationController
  
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      Subscription.create!(user_id: current_user.id, subscribable: @channel)
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm, :workspace_id)
  end
end