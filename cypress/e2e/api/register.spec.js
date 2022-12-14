import authenticationApi from '../../support/utils/api/authentication';
// get email address from API and use it to register
describe('Registration Endpoints should return correct token', function () {
    beforeEach(() => {
        authenticationApi.getUserCredentials();
    });
    it('User should be able to get correct token with registration data', function () {
        cy.task('getCredentials').then((credentials) => {
            authenticationApi.register(credentials).then((token) => {
                authenticationApi.verifyAuthResponse(token);
            });
        });
    });
});
