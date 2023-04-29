const posthtmlInclude = require('posthtml-include');

module.exports = {
    plugins: [
      posthtmlInclude({
        root: __dirname + '/src'
      })
    ]
  };