

if(localStorage.getItem("email")==null ){

//registration
$(document).ready(function(){
    
    $('#insertbtn').click(function(e){
        var fname=$('#fname').val();
        var lname=$('#lname').val();
        var age=$('#age').val();
        var contact=$('#contact').val();
        var email=$('#email').val();
        var pass=$('#pass').val();

        e.preventDefault();

   
        $.ajax({
        method:"post",
        url:"./php/register.php",
        data:{
            email:email,
            pass:pass,
            fname:fname,
            lname:lname,
            age:age,
            contact:contact
        },
        dataType:"text",    
        success:function(response){
            localStorage.setItem("email",email);
            localStorage.setItem("log",1);
            alert("Registered successfully "+response);
            window.location="./profile.html";
          
        }
    })

})
});


}

else{
    alert("Already registered.Click ok to login");
    location.href="./login.html";
}






// $(document).ready(function(){
//     $('#insertbtn').click(function(e){
//         e.preventDefault();
   
//         $.ajax({
//         method:"post",
//         url:"./php/register.php",
//         data:$('#vedformid').serialize(),
//         dataType:"text",    
//         success:function(response){
//             $('#messagedisplay').text(response);

//         }
//     })
// })
// });
