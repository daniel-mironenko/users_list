export const adaptedUsers = (users) => {
  return users.map((user) => {
    return {
      id: user.id,
      username: user.username,
      email: user.email, 
      registrationDate: user.registration_date,
      rating: user.rating
    }
  })
}