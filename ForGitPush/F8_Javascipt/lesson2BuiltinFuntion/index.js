alert("mot so ham built in");

var age = 29;
var name = 'son' + 5;

// truy cap ham console bang .
console.log('Day la 1 dong log');
console.log(age);
age += 5;
console.warn(age);
console.error(name);

confirm('Xac nhan tu tuoi'); // bay gio chua hoc thao tac 

prompt('nhap so tuoi');

setTimeout(function(){ // viết sai chính tả
    console.log('chay sau 1 s = 1000ms')
},1000) // truyen vao 1 function và 1 giá trị ms 

setInterval(function(){
    console.log('1 so bat ki sau 2s duoc lap lai: ' + Math.random())
},2000);
