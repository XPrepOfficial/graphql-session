const Logger = require('../utils/Logger');
const StudentResolver = require('./resolvers/StudentResolver');
const StudentService = require('../services/StudentService');

/**
 * The resolver root class
 * */
exports = module.exports = class ResolverRoot {

    async getStudent({id}) {
        this.log({id});
        return new StudentResolver(await StudentService.getStudent(id));
    }

    async getStudents({limit, offset, filter, sort}) {
        this.log({limit, offset, filter, sort});
        return (await StudentService.listStudents(limit, offset, filter, sort)).map(student => new StudentResolver(student));
    }

    static get bean() {
        if (!ResolverRoot.instance) {
            ResolverRoot.instance = new ResolverRoot();
            // mixin the logger.
            new Logger(ResolverRoot.instance, this.name);
        }
        return ResolverRoot.instance;
    }

};
