const Crypto = require("crypto-js");


class Block {
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0,
        this.previous_hash = ""
    }
}


class Blockchain {
    constructor() {
        this.chain = [];
        this.addBlock(new Block("Genesis Block"));
    }

    addBlock(new_block) {
        new_block.height = this.chain.length;
        new_block.time = new Date().getTime().toString().slice(0,-3);
        if (this.chain.length > 0) {
            new_block.previous_hash = this.chain[this.chain.length - 1].hash
        }
        new_block.hash = Crypto.SHA256(JSON.stringify(new_block)).toString();
        this.chain.push(new_block);
    }
}
