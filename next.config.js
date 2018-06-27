module.exports = {

  exportPathMap: function () {
    const fs = require('fs');

    console.log(fs.readFileSync('./static/sdt01_00.htm').toString());
    return {
      '/index': { page: '/index', query: { data : fs.readFileSync('./static/sdt01_00.htm').toString()}}
    }
  }
}