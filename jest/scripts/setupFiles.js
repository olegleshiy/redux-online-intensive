// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const users = [
    { id: 'TEST_ID', avatar: 'TEST_AVATAR', firstName: 'firstName', lastName: 'lastName' },
    { id: 'TEST_ID', avatar: 'TEST_AVATAR', firstName: 'firstName', lastName: 'lastName' }
];

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const newName = {
    firstName: 'Walter',
    lastName:  'White',
};

const newAvatar = ['avatar'];

const newPassword = {
    oldPassword: 12345,
    newPassword: 12345,
};

global.__ = {
    userProfile,
    users,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccess204,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    newName,
    newAvatar,
    newPassword,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
