json.extract! user, :id, :email, :username, :img_url 
json.channels user.channels.map(&:id)