function linkParserFromResponse(responseObject) {
    let result = null;

    if (responseObject) {
        if (Object.keys(responseObject).includes('_links')) {
            result = {};
            Object.keys(responseObject['_links']).forEach(x => {
                result[x] = responseObject['_links'][x]['href'];
            });
            return result;
        } else {
            return result;
        }
    } else {
        return result;
    }
}

module.exports.linkParserFromResponse = linkParserFromResponse;
