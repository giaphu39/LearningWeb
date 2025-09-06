var name ='son';
var fullName = new String('Son Dang'); // khoi tao 1 doi tuong, instance

console.log(typeof fullName); // ra object nên chỉ nên dùng cách đầu

fullName = 'son dang la \"siu nhan\' ';
console.log(fullName);


fullName = 'day la dau gach cheo nguoc \\'; // backslash in javascript
console.log(fullName);

console.log(fullName.length); // tính luôn các dấu cách
// nếu một từ quá nhiều từ thì 1 dòng chỉ nên 80 từ để dễ nhìn
// ví dụ

fullName = "cach xuong dong"
+ "neu qua dai sau do cach";
console.log(fullName);

// template string ES6
console.log(`toi la: ${name} ten day du la ${fullName}`);

console.log(fullName.indexOf('xuong'));

console.log(fullName.indexOf('cach', 10)); // so 10 la vi tri bat dau tim

// cắt chuỗi

console.log(fullName.slice(5,10)); // 10 là vị trí kết thúc không có lấy giá trị tại đó
console.log(fullName.slice(-4,-1));

// replace 

console.log(fullName.replace('cach','cach1'));
// replace all 
console.log(fullName.replace(/cach/g,'cach1'));
// không thực sự thay đổi
console.log(fullName);


// convert to uppercase/ lowercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


fullName = '       dfsd  rwe ruu ';
console.log(fullName.trim()); // xóa các khoảng trắng ở 2 đầu 

// split
var languages = 'java, php, ruby';
console.log(languages.split(', ')) // chuyển thành mảng 
// tìm điểm chung hợp lí 
console.log(languages.split(''))


// get a character by index
const  myString = 'Son dang';
console.log(myString.charAt(1)); // con nay vuot qua thi tra ve chuoi rong
console.log(myString[1]); // neu vuot qua thi undefied

