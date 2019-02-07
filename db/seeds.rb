# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Workspace.destroy_all
Subscription.destroy_all
Message.destroy_all

admin = User.create!(email: "admin@admin.admin", password: "cmrncouch", username: "Admin!")
charlie = User.create!(email: "charlie@user.com", password: "password", username: "Charlie!")
wonka = User.create!(email: "wonka@user.com", password: "password", username: "Wonka!")
grandpa_joe = User.create!(email: "grandpa_joe@user.com", password: "password", username: "Grandpa_Joe!")
augustus_gloop = User.create!(email: "augustus_gloop@user.com", password: "password", username: "Augustus_Gloop!")

choco_factory = Workspace.create!(name: "Choco Factory", admin_id: admin.id)

welcome = Channel.create!(name: "Welcome!", description: "Welcome to the factory tour! Feel free to eat anything you find", workspace_id: choco_factory.id)
choco_river = Channel.create!(name: "Chocolate river!", description: "Don't fall in, Augustus", workspace_id: choco_factory.id)
charlie_grandpa = Channel.create!(name: "Grandpa Joe", description: "Do you think he knows?", is_dm: true, workspace_id: choco_factory.id)
group_dm = Channel.create!(name: "Re: my successor", description: "I'm looking for someone to take the helm", is_dm: true, workspace_id: choco_factory.id)

#Workspace Subscriptions
choco_admin_sub = Subscription.create!(user_id: admin.id, subscribable: choco_factory)
charlie_choco_sub = Subscription.create!(user_id: charlie.id, subscribable: choco_factory)
wonka_choco_sub = Subscription.create!(user_id: wonka.id, subscribable: choco_factory)
grandpa_joe_choco_sub = Subscription.create!(user_id: grandpa_joe.id, subscribable: choco_factory)
augustus_gloop_choco_sub = Subscription.create!(user_id: augustus_gloop.id, subscribable: choco_factory)

#Channel Subscriptions
admin_welcome_chan_sub = Subscription.create!(user_id: admin.id, subscribable: welcome)
admin_choco_river_chan_sub = Subscription.create!(user_id: admin.id, subscribable: choco_river)
admin_group_dm_chan_sub = Subscription.create!(user_id: admin.id, subscribable: group_dm)

charlie_welcome_chan_sub = Subscription.create!(user_id: charlie.id, subscribable: welcome)
charlie_choco_river_chan_sub = Subscription.create!(user_id: charlie.id, subscribable: choco_river)
charlie_group_dm_chan_sub = Subscription.create!(user_id: charlie.id, subscribable: group_dm)
charlie_grandpa_joe_sub = Subscription.create!(user_id: charlie.id, subscribable: charlie_grandpa)

wonka_welcome_chan_sub = Subscription.create!(user_id: wonka.id, subscribable: welcome)
wonka_choco_river_chan_sub = Subscription.create!(user_id: wonka.id, subscribable: choco_river)
wonka_group_dm_chan_sub = Subscription.create!(user_id: wonka.id, subscribable: group_dm)

grandpa_joe_welcome_chan_sub = Subscription.create!(user_id: grandpa_joe.id, subscribable: welcome)
grandpa_joe_choco_river_chan_sub = Subscription.create!(user_id: grandpa_joe.id, subscribable: choco_river)
grandpa_joe_group_dm_chan_sub = Subscription.create!(user_id: grandpa_joe.id, subscribable: group_dm)
grandpa_joe_charlie_sub = Subscription.create!(user_id: grandpa_joe.id, subscribable: charlie_grandpa)

augustus_gloop_welcome_chan_sub = Subscription.create!(user_id: augustus_gloop.id, subscribable: welcome)
augustus_gloop_choco_river_chan_sub = Subscription.create!(user_id: augustus_gloop.id, subscribable: choco_river)

#Welcome channel messages
Message.create!(body: "Welcome to the tour!", author_id: wonka.id, channel_id: welcome.id)
Message.create!(body: "It's incredible!", author_id: grandpa_joe.id, channel_id: welcome.id)
Message.create!(body: "Wow!", author_id: charlie.id, channel_id: welcome.id)
Message.create!(body: "Oops I fell", author_id: wonka.id, channel_id: welcome.id)
Message.create!(body: "Just kidding, I did a sick somersault", author_id: wonka.id, channel_id: welcome.id)
Message.create!(body: "Talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before", author_id: charlie.id, channel_id: welcome.id)
Message.create!(body: "Where is that chocolate river I've been hearing about?", author_id: augustus_gloop.id, channel_id: welcome.id)
Message.create(body: "Click the chocolate river channel on the left sidebar!", author_id: wonka.id, channel_id: welcome.id)

#Chocolate River messages
Message.create(body: "It's incredible.", author_id: augustus_gloop.id, channel_id: choco_river.id)
Message.create(body: "It's beautiful.", author_id: charlie.id, channel_id: choco_river.id)
Message.create(body: "It's magical.", author_id: grandpa_joe.id, channel_id: choco_river.id)
Message.create(body: "I must drink it all.", author_id: augustus_gloop.id, channel_id: choco_river.id)
Message.create(body: "Stop...", author_id: wonka.id, channel_id: choco_river.id)
Message.create(body: "don't...", author_id: wonka.id, channel_id: choco_river.id)
Message.create(body: "come back...", author_id: wonka.id, channel_id: choco_river.id)
Message.create(body: "He fell in!", author_id: charlie.id, channel_id: choco_river.id)
Message.create(body: "Don't worry about it. This is one of the less gruesome endings we're going to see today :)", author_id: wonka.id, channel_id: choco_river.id)

#Charlie & Grandpa DM messages
Message.create(body: "I think Wonka knows we drank those fizzy lifting drinks", author_id: grandpa_joe.id, channel_id: charlie_grandpa.id)
Message.create(body: "Oh man, I told you we shouldn't have done that, Grandpa!", author_id: charlie.id, channel_id: charlie_grandpa.id)
Message.create(body: "It's important to have a little fun sometimes.", author_id: grandpa_joe.id, channel_id: charlie_grandpa.id)
Message.create(body: "Yeah but... we're in this super dangerous factory where kids keep getting hurt and stuff...", author_id: charlie.id, channel_id: charlie_grandpa.id)
Message.create(body: "It just seems irresponsible, you know?", author_id: charlie.id, channel_id: charlie_grandpa.id)
Message.create(body: "Dangerous, really. Idk if you're being a very good guardian tbh", author_id: charlie.id, channel_id: charlie_grandpa.id)
Message.create(body: "Wait I just got a message from him", author_id: grandpa_joe.id, channel_id: charlie_grandpa.id)
Message.create(body: "Me too. It's a group DM.", author_id: charlie.id, channel_id: charlie_grandpa.id)
Message.create(body: "Check it out. He titled it 're: my successor'!?", author_id: grandpa_joe.id, channel_id: charlie_grandpa.id)
Message.create(body: "omg what", author_id: charlie.id, channel_id: charlie_grandpa.id)

#Final scene messages
Message.create(body: "So I'm looking for someone to take over the chocolate factory", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "And you're literally the only kid who survived today, so...", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "You interested?", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "That's a lot of responsibility!", author_id: charlie.id, channel_id: group_dm.id)
Message.create(body: "Think carefully about this, Charlie", author_id: grandpa_joe.id, channel_id: group_dm.id)
Message.create(body: "By the way...", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "You broke the rules.", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "What rules? We didn't see any rules, did we, Charlie?", author_id: grandpa_joe.id, channel_id: group_dm.id)
Message.create(body: "Wrong, sir! Wrong! Under section 37B of the contract signed by him, it states quite clearly that all offers shall become null and void if - and you can read it for yourself in this photostatic copy - 'I, the undersigned, shall forfeit all rights, privileges, and licenses herein and herein contained,' et cetera, et cetera... 'Fax mentis, incendium gloria cultum,' et cetera, et cetera... Memo bis punitor delicatum! It's all there! Black and white, clear as crystal! You stole Fizzy-Lifting Drinks! You bumped into the ceiling, which now has to be washed and sterilized, so you get... NOTHING!!! You lose! GOOD DAY, SIR!?", author_id: wonka.id, channel_id: group_dm.id)
Message.create(body: "You're a crook... You're a cheat and a swindler...!", author_id: grandpa_joe.id, channel_id: group_dm.id)
Message.create(body: "That's what you are! How can you do a thing like this?! Build up a little boy's hopes, and then smash all his dreams to pieces?!", author_id: grandpa_joe.id, channel_id: group_dm.id)
Message.create(body: "You're an inhuman monster! ", author_id: grandpa_joe.id, channel_id: group_dm.id)
Message.create(body: "I SAID 'GOOD DAY'!", author_id: wonka.id, channel_id: group_dm.id)



