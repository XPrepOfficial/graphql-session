const {buildSchema} = require('graphql');
/**
 * The schema for graph ql nodes
 * */
exports = module.exports = class GraphSchema {

    get types() {
        // Write the GraphQL lang Schema here. Can break in files if required aswell.
        return `
        
        type Credentials {
            enabledNative: Boolean
            enabledFacebook: Boolean
            enabledGoogle: Boolean
            google: SocialCreds
            facebook: SocialCreds
            native: NativeCreds
            passValid(password: String): Boolean
        }
        
        type SocialCreds {
            accessToken: String
            refreshToken: String
            lastUsed: Int
            scopes: [String]
        }
        
        type NativeCreds {
            username: String
            password: String
            salt: String
        }
        
        type Name {
            first: String
            middle: String
            last: String
            full: String
        }
        
        type Student {
            credentials: Credentials
            name: Name!
            age: Int
            id: String
            batches: [Batch]
        }
        
        type Test {
            name: String
            type: String
            expired: Boolean
            topper: Student
            students: [Student]
        }
        
        type Batch {
            name: String
            tests: [Test]
            students: [Student]
        }

        type Query {
            getStudent(id: String): Student
            getStudents(limit: Int!, offset: Int, sort: String, filter: String): [Student]
        }
        
        `;
    }

    compile() {
        return buildSchema(this.types);
    }

    static get schema() {
        if (!GraphSchema._compiledSchema) GraphSchema._compiledSchema = new GraphSchema().compile();
        return GraphSchema._compiledSchema;
    }
};
