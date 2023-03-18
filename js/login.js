

var s=localStorage.getItem("email");
var l=localStorage.getItem("log");


//check for login status
if((l!=1 && s!="") ){
$(document).ready(function (e){
    $('#searchdata').click(function(e){
        e.preventDefault();


    var email=$('input[name=email]').val();
    var pass=$('input[name=pass]').val();
    if(email=="" || pass==""){
        alert("Enter email and password !");
        return;
    }
  
    

//log in 

    $.ajax({
        type:"POST",
        url:"./php/login.php",
        data:{
            "search_post_btn":1,
            "email":email,
            "pass":pass
        },
        dataType:"text",
        success:function (row){
            if(row.includes('no user')){
                alert("invalid login credentials !");
            }
            else{
                localStorage.setItem("log",1);
                localStorage.setItem("email",email);
                alert("logged in succesfully !");
                window.location="./profile.html";
            }
            
         }
    })
})
})

}

//already logged in

else if(l==1){
    alert("already logged in !");
    
    window.location="./profile.html";
}



















// $(document).ready(function (e){
//     $('#searchdata').click(function(e){
//         e.preventDefault();


//     var mail=$('input[name=mail]').val();
//     var pass=$('input[name=pass]').val();
//     //alert(mail);

//     $.ajax({
//         type:"POST",
//         url:"./php/login.php",
//         data:{
//             "search_post_btn":1,
//             "mail":mail,
//             "pass":pass
//         },
//         dataType:"text",
//         success:function (response){
//             alert(response);
//             alert("logged in successfully !");
//             var h=localStorage.getItem("age");
//             alert(h);
//             // if (localStorage)  
//             // {  
//             //     var user_ = {};  
//             //     user_.name = $("#txtName").val();  
//             //     user_.age = $("#txtAge").val();  
//             //     user_.contact = $("#txtSalary").val();  
                  
//             //     varItemId = "Emp" + user_.Name;  
//             //     localStorage.setItem(ItemId, JSON.stringify(user_));  
//             // }  
//             // else  
//             // {  
//             //     alert("OOPS! Your Browser Not Supporting LocalStorage Please Update It!")  
//             // } 

//            // window.location.href = "./profile.html";
//         }
//     })
// })
// })



