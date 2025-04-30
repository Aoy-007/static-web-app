const { app } = require('@azure/functions');

app.http('list', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function:[list] processed request for url "${request.url}"`);

        return { body: ['js', 'html', 'css'] };
    }
});
