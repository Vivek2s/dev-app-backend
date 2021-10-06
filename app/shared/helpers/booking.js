'use strict';

module.exports = {
    
    generateSlug(str) {
        str = str.toLowerCase();
        str = str
            .replace(/^\s+|\s+$/g, '') // trim spaces
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return str;
    }
}