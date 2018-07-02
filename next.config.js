module.exports = {

  exportPathMap: function () {
    const fs = require('fs');

    const filenames = fs.readdirSync('./data')
    const pages = {}
    filenames.map((name) => {
      if (!name.endsWith('htm'))
        return;
                
      pages['/' + name + 'l'] = 
        { page: '/index', query: { data: fs.readFileSync('./data/' + name).toString() } }
    });

    return pages;
  }
}