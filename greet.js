module.exports = greet;

function greet(name) {
	var greeting = "Hello " + name;
	return greeting;
};

var msg = greet('Xola');
console.log(msg);

var figlet = require('figlet');
 
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
