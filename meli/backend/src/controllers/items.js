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
            var data = adaptItems(json);
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
                    var data = adaptItems({results: [byId]}, true);
                    res.status(200).jsonp(data);
                }
            });
        } else {
            res.json(error);
        }
    }
    );
}

const adaptItems = (data, only = false) => {
    var response = {
        author: {
            name: "Federico",
            lastname: "Degiovanni"
        },
        categories: [],
        items: []
    };



    data.results.forEach(item => {
        const adapted = adaptSearchItem(item, only);
        response.items.push(adapted);
    });

    

    if (only) {
        delete response.categories;

        var item = response.items[0];
        response.item = item;
        delete response.items;
    }else{
        if (data.filters.lenght > 0) {
            data.filters[0].values[0].path_from_root.forEach(value => {
                response.categories.push(value.name);
            });
        } else {
            response.categories.push(data.available_filters[0].values[0].name);

        }
        
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
        free_shipping: data.shipping.free_shipping,
        address: data.address
    };

    if (only) {
        var images = data.pictures.find(function (pic) { 
            const [width, height] = pic.max_size.split('x');
            return width >= 680 && height > 680 ; 
        }); 
        adapted.picture = (images !== undefined && images !== null) ? images.url : adapted.picture;
        adapted.sold_quantity = data.sold_quantity
        adapted.description = data.description.plain_text;
    }

    return adapted;
}