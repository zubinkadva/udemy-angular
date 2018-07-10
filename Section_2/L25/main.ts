import { Like } from './like';

let like: Like = new Like(12, false);

console.log('INITIAL STATES');
console.log('----------------------');
like.getResults();
console.log('----------------------');

like.click();
