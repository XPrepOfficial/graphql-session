const Logger = require('./utils/Logger');
const graphqlHTTP = require('express-graphql');

// graph deps
const ResolverRoot = require('./graph/ResolverRoot');
const GraphSchema = require('./graph/GraphSchema');

/**
 * To handle graphQL routes
 * */
exports = module.exports = class GraphQLController extends Logger {

    constructor(router) {
        super();

        // config routes
        router.get('/', this.hello);
        router.get('/graph-api', this.graphAPI);
        router.post('/graph-api', this.graphAPI);

        this.log('Routes configured...');
    }

    async hello(req, res) {
        res.send('Hello Yo!');
    }

    async graphAPI(req, res) {
        graphqlHTTP({
            schema: GraphSchema.schema,
            rootValue: ResolverRoot.bean,
            graphiql: process.env.NODE_ENV !== 'production',
        })(req, res);
    }


};
