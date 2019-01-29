class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(data['message'])
    if message.save!
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = Message.all.collect
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
