export default function routeReducer(state='', action) {
  if (action.type === 'ROUTE_CHANGED') {
    return action.route;
  }
  return state;
}

export function changeRoute(route) {
  return {
    type: 'ROUTE_CHANGED',
    route: route
  }
}
