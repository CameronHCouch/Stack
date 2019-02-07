export const requestUsers = () => {
  debugger
  return $.ajax({
    method: "GET",
    url: `api/users`
  })
}