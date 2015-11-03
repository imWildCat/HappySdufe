'use strict';

export default function APIRequestMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { apiRequest, types, ...rest } = action;
      if (!apiRequest) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});
      return apiRequest(client).then(
        (result) =>  {
          result.json().then((json)=> {
            next({...rest, json, type: SUCCESS})
          });
        },
        (error) => next({...rest, error, type: FAILURE})
      );
    };
  };
}