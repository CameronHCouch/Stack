# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Workspace.destroy_all
Subscription.destroy_all

admin = User.create!(email: "admin@admin.admin", password: "cmrncouch", username: "Admin!")
guest = User.create!(email: "guest@user.com", password: "password", username: "Guest!")
quest = User.create!(email: "quest@user.com", password: "password", username: "Quest!")
best = User.create!(email: "best@user.com", password: "password", username: "Best!")

app_acad = Workspace.create!(name: "App Academy", admin_id: admin.id)
map_acad = Workspace.create!(name: "Map Academy", admin_id: quest.id)

welcome = Channel.create!(name: "#welcome!", description: "Company-wide announcements and work-based matters", workspace_id: app_acad.id)
belcome = Channel.create!(name: "#belcome!", description: "You have entered: The Belcome Chat", workspace_id: app_acad.id)
secret_dm = Channel.create!(name: "First DM", description: "Do Slack DMs have descriptions?", is_dm: true, workspace_id: app_acad.id)
geographers = Channel.create!(name: "#welcome!", description: "Learn about maps", workspace_id: map_acad.id)
map_dm = Channel.create!(name: "Map1 DM", description: "Do Slack DMs have descriptions? 1", is_dm: true, workspace_id: map_acad.id)
map_dm2 = Channel.create!(name: "Map2 DM", description: "Do Slack DMs have descriptions? 2", is_dm: true, workspace_id: map_acad.id)
map_dm3 = Channel.create!(name: "Map3 DM", description: "Do Slack DMs have descriptions? 3", is_dm: true, workspace_id: map_acad.id)
map_dm4 = Channel.create!(name: "Map4 DM", description: "Do Slack DMs have descriptions? 4", is_dm: true, workspace_id: map_acad.id)

#Workspace Subscriptions
aa_admin_sub = Subscription.create!(user_id: admin.id, subscribable: app_acad)
ma_admin_sub = Subscription.create!(user_id: quest.id, subscribable: app_acad)

guest_aa_sub = Subscription.create!(user_id: guest.id, subscribable: app_acad)
guest_ma_sub = Subscription.create!(user_id: guest.id, subscribable: map_acad)

quest_ma_sub = Subscription.create!(user_id: quest.id, subscribable: map_acad)

best_aa_sub = Subscription.create!(user_id: best.id, subscribable: app_acad)
best_ma_sub = Subscription.create!(user_id: best.id, subscribable: map_acad)

#Channel Subscriptions
admin_welcome_chan_sub = Subscription.create!(user_id: admin.id, subscribable: welcome)
admin_belcome_chan_sub = Subscription.create!(user_id: admin.id, subscribable: belcome)
admin_secret_dm_chan_sub = Subscription.create!(user_id: admin.id, subscribable: secret_dm)

guest_welcome_chan_sub = Subscription.create!(user_id: guest.id, subscribable: welcome)
guest_belcome_chan_sub = Subscription.create!(user_id: guest.id, subscribable: belcome)
guest_secret_dm_chan_sub = Subscription.create!(user_id: guest.id, subscribable: secret_dm)
guest_map_dm_chan_sub = Subscription.create!(user_id: guest.id, subscribable: map_dm3)
guest_map_dm_chan_sub = Subscription.create!(user_id: guest.id, subscribable: map_dm4)

quest_geographers_chan_sub = Subscription.create!(user_id: quest.id, subscribable: geographers)
quest_map_dm_chan_sub = Subscription.create!(user_id: quest.id, subscribable: map_dm)
quest_map_dm_chan_sub = Subscription.create!(user_id: quest.id, subscribable: map_dm2)
quest_map_dm_chan_sub = Subscription.create!(user_id: quest.id, subscribable: map_dm3)
quest_map_dm_chan_sub = Subscription.create!(user_id: quest.id, subscribable: map_dm4)

best_welcome_chan_sub = Subscription.create!(user_id: best.id, subscribable: welcome)
best_belcome_chan_sub = Subscription.create!(user_id: best.id, subscribable: belcome)
best_secret_dm_chan_sub = Subscription.create!(user_id: best.id, subscribable: secret_dm)
best_map_dm_chan_sub = Subscription.create!(user_id: best.id, subscribable: map_dm2)
best_map_dm_chan_sub = Subscription.create!(user_id: best.id, subscribable: map_dm4)
