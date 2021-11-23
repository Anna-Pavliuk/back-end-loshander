const express = require('express');
const app = express();

const https = require('https');

app.get('/getData', (req, res) => {
    https.get('https://serpapi.com/search.json?q=horse&tbm=isch&ijn=0&tbs=itp:photos,isz:m&api_key=c1806beddf213a49bb1b4ca1c2679d63af983cfef760c8bbbc84e60814774b1c', (resp) => {

    
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.json(JSON.parse(data).images_results);
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });

    // res.json({
    //     "statusCode": 200,
    //     "statusMessage":"SUCCESS"
    // })
})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000')
})
