export function customThunk(store) {
    return function (next) {
        return function (action) {
            if(typeof action === 'function') {
                return action(store.dispatch, store.getState)
            }
            return next(action);
        }
    }
}

/*
export const customThunk = (store) => (next) => (action) => typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
 */