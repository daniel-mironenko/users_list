export const getFilteredUsers = (users, filterType) => {
  if (!filterType.trim()) {
    return users;
  }

  const lowerFilterType = filterType.toLowerCase();

  return users.filter((user) =>  user.username.toLowerCase() === lowerFilterType || user.email.toLowerCase() === lowerFilterType)
}