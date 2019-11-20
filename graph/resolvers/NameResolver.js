const Logger = require('../../utils/Logger');
/**
 * Resolve Name Node
 * */
class NameResolver extends Logger {
    constructor(name) {
        super();
        this._name = name;
    }

    first() {
        this.log('First resolved');
        return this._name.first;
    }

    middle() {
        this.log('Middle resolved');
        return this._name.middle;
    }

    last() {
        this.log('Last resolved');
        return this._name.last;
    }

    full() {
        this.log('Full resolved', this._name);
        return [this._name.first, this._name.middle, this._name.last].filter(part => (part || '').toString().trim().length > 0).join(' ');
    }
}

// export
exports = module.exports = NameResolver;
