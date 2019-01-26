@workspaces.each do |workspace|
  json.set! workspace.id do
    json.partial! 'api/workspaces/workspace', workspace: workspace
  end
end