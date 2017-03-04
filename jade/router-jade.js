/**
 * Created by forli on 2017/3/3.
 */
const pug = require('pug');
const compiledFunction = pug.compileFile('views/index.pug');
console.log(compiledFunction({
    name: 'Timothy'
}));

console.log(compiledFunction({
    name: 'Forbes'
}));

