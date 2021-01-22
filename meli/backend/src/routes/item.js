const itemsController = require('../controllers/items');

function addItemsRoutes(server, express){
    var router = express.Router();
    router.route('/items')
        .get(itemsController.search);
    
    router.route('/items/:id')
        .get(itemsController.find)

    server.use(process.env.BASE,router);

    return server;
}

module.exports = addItemsRoutes;