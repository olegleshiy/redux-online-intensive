//Core
import { List, fromJS } from 'immutable';

//Reducer
import { usersReducer } from '../reducer';

//Actions
import { usersActions } from '../actions';

const initialState = List();

describe('auth reducer:', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle FILL_USERS action', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(initialState))).toEqual(fromJS(initialState));
    });

    test('should handle CLEAR_USERS action', () => {
        expect(usersReducer(void 0, usersActions.clearUsers(initialState))).toEqual(initialState.clear());
    });
});
