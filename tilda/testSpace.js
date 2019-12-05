const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const url = '/Users/Shared/Previously Relocated Items/Security/Проекты/tilda/tildaAnswer.html'
const utf8 = require('utf8');
const body = require('./input.json')
const _ = require('lodash');

function Docs (title, link) {
    this.title = title;
    this.link = link;
};
let arr = [];
arr.push(new Docs('qwe', '123'))
arr.push(new Docs('qw2e', '123'))

function test(one, two) {
    return ('one', 'two');
}

console.log( test([1, 2]) )