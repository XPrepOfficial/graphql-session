const Logger = require('../../utils/Logger');
const StudentService = require('../../services/StudentService');

/**
 * Resolve Name Node
 * */
class BatchResolver extends Logger {
    constructor(batch) {
        super();
        this._batch = batch;

    }

    name() {
        return this._batch.name;
    }

    async students() {
        const StudentResolver = require('./StudentResolver');
        // fetch students of the batch
        return (await StudentService.listStudents(2)).map(student => new StudentResolver(student))
    }
}

// export
exports = module.exports = BatchResolver;
