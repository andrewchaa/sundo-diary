module.exports = {

  exportPathMap: function () {

    const fs = require('fs');

    // const readFile = (filename) => {
    //   return new Promise((resolve, reject) => {
    //     require('fs').readFile(filename, 'utf8', (err, data) => {
    //       if (err) {
    //         reject(err);
    //         return;
    //       }
  
    //       resolve(data);
    //     })
    //   })
    // }

    // readFile('./static/sdt01_00.htm').then((msg) => console.log(msg));

    // './static/sdt01_00.htm'
    console.log(fs.readFileSync('./static/sdt01_00.htm').toString());
    return {
      '/about1': { page: '/about', query: { data : fs.readFileSync('./static/sdt01_00.htm').toString()}}
    }
  }
}