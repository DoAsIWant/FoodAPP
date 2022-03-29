const http = require('http');
const path = require("path");
const FormData = require("form-data");
const fs = require("fs");

function sendEntity(entity, item) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(item);

        const req = http.request({
            hostname: 'localhost',
            port: 8081,
            path: `/${entity}/`,
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            }
        }, res => {
            res.on('data', response => {
                resolve(response.toString());
            });
        });

        req.write(data);

        req.on('error', error => {
            console.error(error);

            reject(error);
        })

        req.end();
    });
}

function sendFile(entity, file) {
    return new Promise((resolve, reject) => {
        const form = new FormData();

        console.log(file);
        
        form.append("name", file);
        form.append("image", fs.createReadStream(path.resolve(__dirname, "image", file)), file);

        const req = http.request({
            hostname: 'localhost',
            port: 8082,
            path: `/${entity}/`,
            method: 'Post',
            headers: {
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMDEyMjMzMzQ0NDQ1NTU1NTY2NjY2NiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDAwMTk3Njd9.tjJlkVHa2YMUymaDP1Hz9f2Xra8UH4tgLEzTvSC-5B8",
                ...form.getHeaders(),
            }
        }, res => {
            res.on('data', response => {
                resolve(JSON.parse(response.toString()));
            });
        });

        req.on('error', error => {
            console.error(error);

            reject(error);
        });

        form.pipe(req);
    });
}


async function populate() {
    const files = {};

    for (let item of require("./property.json")) {
        await sendEntity("property", item)
            .then(res => console.log(res));
    }

    for (let item of require("./image.json")) {
        await sendEntity("image", item)
            .then(res => console.log(res));
    }

    for (let item of require("./section.json")) {
        await sendEntity("section", item)
            .then(res => console.log(res));
    }

    for (let item of require("./content.json")) {
        await sendFile("image", item.image[0].url)
            .then(res => files[item.slug] = res.filename)
    }

    for (let item of require("./content.json")) {
        item.image = {
            "url": files[item.slug],
            "image": "PRODUCT_DETAIL"
        }

        await sendEntity("content", item)
            .then(res => console.log(res));
    }
}

populate().catch(res => console.log(res));
