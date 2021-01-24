function addHomeRoutes(server, express){
    var router = express.Router();
    router.get('/', (req, res) => {
        res.send('API working');
    });

    server.use(process.env.BASE, router);

    return server;
}

module.exports = addHomeRoutes;