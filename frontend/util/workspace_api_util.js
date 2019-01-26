export const receiveWorkspaces = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/workspaces`
  })
}

export const receiveWorkspace = id => {
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