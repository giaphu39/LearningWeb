
// hàm tìm kiếm 

// console.log(Date.prototype.includes);

var title ='Responsive web design';
console.log(title.includes('Responsive',0)) // tham số sau là vị trí bắt đầu tìm kiếm 
// tuong tu không bỏ tham số vào

var courses = ['java','php','dart'];
console.log(courses.includes('java', -3)); // size -3 = 0 tim tu 0



console.log(courses.includes('java', -4)); // ra số âm thì mặc định bằng 0

