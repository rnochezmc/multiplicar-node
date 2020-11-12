// requireds
const fs = require('fs');

let base = 2;
let data = '';

for(let i=1; i<=10; i++) {
    //console.log(` ${ base } * ${ i } = ${ base * i }`);
    data += (` ${ base } * ${ i } = ${ base * i }\n`);
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
// para grabar un archivo de texto en Window/OS/Linux

fs.writeFile('tabla-2.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

