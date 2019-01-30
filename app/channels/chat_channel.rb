class ChatChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find(params['channelId'])
    stream_for channel
    load({'channelId' => params['channelId']})
  end

  def speak(data)
    message = Message.new(data['message'])
    if message.save!
      channel = Channel.find(message.channel_id)
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

  def load(data)
    channel = Channel.find(data['channelId'])
    messages = channel.messages
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(channel, socket)
  end

  def unsubscribed; end
end
