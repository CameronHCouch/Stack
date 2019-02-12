export const requestUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users`
  })
}