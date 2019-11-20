const Logger = require('../../utils/Logger');
const NameResolver = require('./NameResolver');
const CredentialsResolver = require('./CredentialsResolver');
const BatchResolver = require('./BatchResolver');

/**
 * Resolves student node
 * */
class StudentResolver extends Logger {

    constructor(student) {
        super();
        this.log(student);
        this._student = student;
    }

    age() {
        this.log('Age resolved');
        return this._student.age
    }

    id() {
        this.log('ID resolved');
        return this._student.id;
    }

    name() {
        this.log('Name resolved');
        return new NameResolver(this._student.name);
    }

    credentials() {
        this.log('Credentials resolved');
        return new CredentialsResolver(this._student.credentials, this._student);
    }

    async batches() {
        // db call to get this student batches. service call
        return [
            {name: 'Batch 1'},
            {name: 'Batch 2'},
            {name: 'Batch 3'},
            {name: 'Batch 4'},
        ].map(batch => new BatchResolver(batch));
    }

}

// export
exports = module.exports = StudentResolver;
