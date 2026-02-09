// object prototype hiểu là nguyên mẫu( khuôn mẫu ) đối tượng

function User(firstName, lastName, avatar){ // mô tả thiết kế đối tượng
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    // muốn thêm thuộc tính ngoài class

}
// cách này thì không truyền tham số vào được trừ phương thức
User.prototype.className ='F8'; 
// thuộc tính này nằm trong __proto__ và đối tượng có thể .thuoctinh để truy xuất ra
User.prototype.getClassName = function(){
    return this.className;
}

var user= new User('son','dang','ava1');
console.log(user.getClassName());
