
const { spider, superman } = require('./app')
const mainsass = require('./main.scss')
// const maincss = require('./app.css')

function person() {
    console.log('hello world dist')
    spider();
    superman();
}

person();

// [
//     {
//         "loader": "/Users/lizhiyong/Downloads/newproject/newwebpack/node_modules/extract-text-webpack-plugin/loader.js",
//         "options": {
//             "id": 1,
//             "omit": 1,
//             "remove": true
//         }
//     },
//     {
//         "loader": "style"
//     },
//     {
//         "loader": "css"
//     },
//     {
//         "loader": "sass"
//     }
// ]