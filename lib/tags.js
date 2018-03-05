'use strict';

class Tag {
    constructor(value) {
        this.value = value;
    }

    parse(/* config */) {
        throw new Error('Not implemented.');
    }
}

class RefdocTag extends Tag {
    constructor(value) {
        super(value);
    }

    parse(config) {
        super.parse(config);
    }
}

class DeclareTag extends Tag {
    constructor(value) {
        super(value);
    }

    parse(config) {
        super.parse(config);
    }
}

new RefdocTag();
new DeclareTag('root = ./src');
