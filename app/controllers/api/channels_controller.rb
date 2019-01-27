class Api::ChannelsController < ApplicationController
  
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
  end

  def update
  end

  private

  def workspace_params
    
  end
end