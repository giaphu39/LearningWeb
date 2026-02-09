// một số trình duyệt không hỗ trợ polyfill
// phải add đoạn mã này vào 

if(!String.prototype.includes){ // có tồn tại thư viện này không
    String.prototype.includes = function(search,start){
        'use strict'; // chế độ nghiêm ngặt

        if(search instanceof RegExp){ // kiểm tra tính hợp lệ nếu không hợp lệ thì quăng ra lỗi
            throw TypeError('first argument must not be a regExp');

        }

        if(start === undefined){ start = 0;} // start tìm kiếm vị trí bắt đầu từ đầu nếu không truyền vào thì cho bằng 0
    return this.indexOf(search,start) !== -1;  // indexOf không tìm thấy thì trả về -1
    };
}

// tự tạo function đáp ứng chương trình cũ thì gọi là polyfill

// phương thức includes có tác dụng kiểm tra suuwj tồn tại của 1 phần tử
'Javascript course'.includes('Java' , 0);

