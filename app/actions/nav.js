export const navigate = (routeName) => {
  return {
    type: 'Navigation/NAVIGATE',
    routeName: routeName
  }
}