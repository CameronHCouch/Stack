class Api::ChannelsController < ApplicationController
  
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    # hardcoding workspace until workspaces are fully implemented
    @channel.workspace = current_user.workspaces.first

    if @channel.save
      Subscription.create!(user_id: current_user.id, subscribable: @channel)
      if params[:channel][:member_list].length
        invites = params[:channel][:member_list].split(" ")
        invites.each do |member_id|
          Subscription.create!(user_id: member_id, subscribable: @channel)
        end
      end
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = current_user.channels.find(params[:id])
    if @channel.update_attributes(channel_params)
      if params[:channel][:member_list].length
        invites = params[:channel][:member_list].split(" ")
        invites.each do |member_id|
          Subscription.create!(user_id: member_id, subscribable: @channel)
        end
      end
      render :show
    else
      render json @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = current_user.channels.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :is_dm, :workspace_id)
  end
end