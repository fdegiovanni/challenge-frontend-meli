var request = require('request');

const urlMeLi = "https://api.mercadolibre.com";

const METHODS = {
    SEARCH: "/sites/MLA/search?q=",
    ITEM: "/items/",
    DESCRIPTION: "/items/:id/description"
};

const apiToApi = require('../services/apiToApi');

exports.search = (req, res) => {
    const query = req.query.q || '';
    console.log(`GET items by query = ${query}`);
    //Connect to MeLi API
    const url = urlMeLi + METHODS.SEARCH + query;

    request({ uri: url }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var json = JSON.parse(body);
            var data = adaptItems(json.results);
            res.status(200).jsonp(data);
        } else {
            res.json(error);
        }
    }
    );

}

exports.find = (req, res) => {
    const id = req.params.id || '';
    console.log(`GET items by id = ${id}`);
    //Connect to MeLi API
    var url = urlMeLi + METHODS.ITEM + id;
    console.log(`Conneting to: ${url}`);

    request({ uri: url }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            var byId = JSON.parse(body);

            var url = urlMeLi + METHODS.DESCRIPTION.replace(':id', id);
            console.log(`Conneting to: ${url}`);
            request({ uri: url }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log('eueueueue')
                    var description = JSON.parse(body);
                    byId.description = description;
                    var data = adaptItems([byId], true);
                    res.status(200).jsonp(data);
                }
            });
        } else {
            res.json(error);
        }
    }
    );
}

const adaptItems = (list, only = false) => {
    var response = {
        author: {
            name: "Federico",
            lastname: "Degiovanni"
        },
        categories: [],
        items: []
    };

    list.forEach(item => {
        const { adapted, category } = adaptSearchItem(item, only);
        response.items.push(adapted);
        if (!response.categories.includes(category)) {
            response.categories.push(category);
        }
    });

    if (only) {
        delete response.categories;
    }

    return response;
}

const adaptSearchItem = (data, only) => {
    const adapted = {
        id: data.id,
        title: data.title,
        price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: 2
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping
    };

    if (only) {
        adapted.sold_quantity = data.sold_quantity
        adapted.description = data.description.plain_text;
    }

    const category = data.category_id;
    return { adapted, category };
}