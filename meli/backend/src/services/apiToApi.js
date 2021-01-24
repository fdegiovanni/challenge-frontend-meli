

exports.get = async (method) => {
    console.log(`Calling to: ${method}`);
    return await fetch(method)
                    .then(res => res.json());

}

