var BOX = document.querySelector('.box')

BOX.querySelector('.heading2').innerText = 'new heading'
// innerText là nội dung giống trên trình duyệt
console.log(BOX);

var aLink = document.querySelector('a')
aLink.textContent = 'thay doi dong bang textContent'
// textContent thì lấy toàn bộ text node 
// Ví dụ

var Heading = document.querySelector('.heading3');
console.log(Heading.innerText); // chỉ nằm trong element node không nằm trong text node
console.log(Heading.textContent); // nằm trên text node và element node trong DOM
// 2 cái này thay đổi các nội dung luôn là text nên không thể viết thẻ trong innerText textContent
  
aLink.textContent = `

    textContent thì không chuyển thành thẻ br nếu xuống dòng
`;

Heading.innerText = `


    innerText thì chuyển khoảng trống thành br
`