window.onload = function () {
    document.querySelector('#submit').onclick=function(){
    let User = new Users();
    User.email = document.querySelector("#email").value;
    User.password = document.querySelector("#password").value;
    User.passwordConfirm = document.querySelector("#password__confirm").value;
    User.name = document.querySelector("#name").value;
    User.phone = document.querySelector("#phone").value;
    User.gender = document.querySelector("#gender").value;
    let promise= axios({
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        method:"POST",
        data:User
    })
    promise.then(function(result){
        console.log(result.data)
        alert("Đăng ký tài khoản thành công")
    })
    promise.catch(function(err){
        console.log('err');
        alert("Đăng ký tài khoản thất bại")
    })
  }
};
