
var heading = document.querySelector('h1');
// console.log(heading)

heading.title = 'heading1'; // chỉ thấy khi chạy DOM nên xem mã nguồn không thấy 
heading.className = 'phaiDungClassNamethemClass';

var Aselect = document.querySelector('a');
Aselect.href = 'HJea';

// có thể lấy,set các thuộc tính không hợp lệ
// Nên dùng kiểu này
heading.setAttribute('id', 'IDDungSet')

heading.setAttribute('href', 'KhonghoplenhungVanAddDuoc')

console.log(heading.getAttribute('class'));
console.log(heading.getAttribute('id'));
console.log(heading.getAttribute('href'));

