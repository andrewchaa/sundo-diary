const fs = require('fs');
const titleRegex = /value="\s+([^"]+)/gm;

const filenames = fs.readdirSync('./titles')
filenames.map(file => {

  const content = fs.readFileSync('./titles/' + file).toString();
  const lines = content.split(/\r?\n/)
  lines.map(v => {
    const matches = titleRegex.exec(v);
    if (matches != null) {
      console.log(matches[1])
    }
  })
  
})


// const matches = titleRegex.exec(lines[0]);
// console.log(matches[1])