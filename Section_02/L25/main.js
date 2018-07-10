var like_1 = require('./like');
var like = new like_1.Like(12, false);
console.log('INITIAL STATES');
console.log('----------------------');
like.getResults();
console.log('----------------------');
like.click();
