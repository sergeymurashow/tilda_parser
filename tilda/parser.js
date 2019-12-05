const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const url = '/Users/Shared/Previously Relocated Items/Security/Проекты/tilda/tildaAnswer.html'
const utf8 = require('utf8');
const body = require('./input.json')
const _ = require('lodash');
const BP = require('bp-api');
const bp = new BP('a-prokat.bpium.ru', 'sergey.murashow@gmail.com', 'R2Qq5f670', 'https', 30000);

let allData = fs.readFileSync('tilda/allData.json', 'utf8');
// module.exports();


module.exports = async () => {
    function Docs(title, link) {
        this.title = title;
        this.src = link;
    };
    
    function sendFiles (files) {
        allData = JSON.parse( allData )
        let face = allData.headers.referer
        bp.patchRecord(31, face, {'21': arr})
    };
    
    let arr = [];
    for (let i in body) {
        if (i.match('docs')) {
            // console.log( body[i] )
            let response = await getData(body[i]);
            let parsed = await parse(response);
            arr.push( parsed );
        }
    };
    
    async function parse(body) {
        // console.log( body )
        const $ = cheerio.load(body);
        let link = $('a').attr('href');
        let title = $('a').text();
        return new Docs(title, link);
    };


    async function getData(url) {
        try {
            let response = await axios.get(url)
            // console.log( response.data )
            return response.data
        } catch (err) {
            return err;
        }
        }
    console.log(arr)
    };




// let request = fs.readFileSync(url, (err, data) => {
//     // console.log( data )
//     return data;
// })

// const $ = cheerio.load(request);

// let link = $('a').attr('href');
// let title = $('a').text();

// console.log(
//     link,
//     title,
//     arr
//     )
