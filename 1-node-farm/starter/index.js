const fs = require('fs');
const http = require('http');

//BLOCKING SYNCRONOUS WAY
// const read_options = { encoding: 'utf8', flag: 'r' };
// const wrtie_options = { encoding: 'utf8', flag: 'w' };
// const textIn = fs.readFileSync('./txt/input.txt', read_options);
// console.log(textIn);

// if (!fs.existsSync('./txt/my-text.txt')) fs.writeFileSync('./txt/my-text.txt', '', wrtie_options);

// const my_text_content = fs.readFileSync('./txt/my-text.txt', read_options);
// const added_text_content = '..this is the new part';

// fs.writeFileSync('./txt/my-text.txt', `[${new Date(Date.now()).toLocaleString()}]:` + my_text_content + '\n' + added_text_content, wrtie_options);

//NON-BLOCKING SYNCRONOUS WAY
// const new_text = `[${new Date(Date.now()).toLocaleString()}]-message: This is a new text message here.\n`;

// const path = './txt/my-new-file.txt';

// if (!fs.existsSync(path))
//   fs.writeFile(path, '', wrtie_options, (err) => {
//     if (err) throw err;
//     console.log('file created');
//   });

// fs.readFile(path, read_options, (err, data) => {
//   if (err) return console.error('[ERROR here] 💥', err.message);
//   write(data);
// });

// const write = (data) =>
//   fs.writeFile(path, `${data ? data : ''}` + new_text, wrtie_options, (err) => {
//     if (err) throw err;
//     console.log('new content added');
//   });
// console.log('after writing file');

///SERVER:
http.createServer((req, res) => {
  res.end('Hello from server!');
});
