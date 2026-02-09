
// object
function Validator(options){

    function Validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        // tách ra vì có thể vị trí thay đổi khác 
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);
    // console.log(formElement)

    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                inputElement.onblur = function(){
                    Validate(inputElement, rule);
                }
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                    // hay sai lẫn lôn inputElement và formElement tại đây
                }
            }
        })
    }

}




//rules
Validator.isRequired = function(selector, message){
    return{
        selector:selector,
        test : function(value){
            return value.trim() ? undefined : message||'vui lòng nhập trường này' ; 
        } // value.trim() là lấy ra giá trị bỏ space 2 đầu, nếu khác 0 thì đúng
    }

}

Validator.isEmail = function(selector, message){
    return{
        selector:selector,
        test : function(value){
            var regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
            return regex.test(value)  ? undefined : 'vui lòng nhập lại định dạng email'; 
        } // một var regex bất kì có hàm test -> dùng cho dạng regex
    }
}

Validator.minLength = function(selector,minLength = 5,message){ // nên đặt minLength trong config luôn
    return{
        selector:selector,
        test : function(value){
            return value.length > minLength  ? undefined : `mật khẩu cần ít nhất ${minLength} kí tự`; 
        } 
    }
}

Validator.isConfirmed = function(selector, getConfirmValue ,message){ // nên đặt minLength trong config luôn
    return{
        selector:selector,
        test : function(value){
            return value ==  getConfirmValue() ? undefined : message||'Giá trị nhập vào không chính xác'; 
        } 
    }
}