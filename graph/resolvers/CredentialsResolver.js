const Logger = require('../../utils/Logger');

/**
 * Resolve Name Node
 * */
class CredentialsResolver extends Logger {
    constructor(credentials, user) {
        super();
        this._creds = credentials;
    }

    async passValid({password}) {
        this.log('passValid resolved', {password});
        return password === 'pass';
    }
}

// export
exports = module.exports = CredentialsResolver;
