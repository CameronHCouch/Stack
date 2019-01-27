export const requestWorkspaces = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/workspaces`
  })
}

export const requestWorkspace = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/workspaces/${id}`
  })
}

export const createWorkspace = workspace => {
  return $.ajax({
    method: 'POST',
    url: `/api/workspaces/`,
    data: { workspace }
  })
}