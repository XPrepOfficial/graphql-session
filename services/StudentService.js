const Logger = require('../utils/Logger');

/**
 * Used to fetch Student Data
 * */

class StudentService {

    static async getStudent(id) {
        return {
            id: id,
            name: {first: 'Student', middle: '', last: id},
            credentials: {},
            age: 12
        };
    }

    static async listStudents(limit, offset, filter, sort) {
        this.log('Listing Students', {limit, offset, filter, sort});
        const students = [];
        for (let i = 0; i < limit; i++) {
            students.push({
                id: i,
                name: {first: 'Student', middle: '', last: i},
                credentials: {},
                age: 12
            });
        }
        return students;
    }

}

// Mixin logger and export
new Logger(StudentService, StudentService.name); // static level mixin performed.
exports = module.exports = StudentService;
