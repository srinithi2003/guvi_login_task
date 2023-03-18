
//checking login status
if (localStorage.getItem("log") == 1) {


    $(document).ready(function () {



        //updating profile details
        $('#update').click(function (e) {

            var fname = $('#fname').val();
            var lname = $('#lname').val();
            var age = $('#age').val();
            var contact = $('#contact').val();


            $.ajax({
                type: "POST",
                url: "./php/profile.php",
                data: {
                    fname: fname,
                    lname: lname,
                    age: age,
                    contact: contact

                },
                dataType: "text",
                success: function (row) {
                    alert("profile updated successfully");
                    window.location = "./profile.html";

                }
            })
        })


        //logout

        $('#logout').click(function (e) {


            $.ajax({
                method: "GET",
                url: "./php/login.php",
                dataType: "text",
                success: function (res) {
                    alert("successfully logged out !");
                    window.location = "./home.html";
                }
            })
            localStorage.clear();
            window.location = './login.html';


        })
    });



    //displaying user profile details

    $.ajax({
        type: "GET",
        url: "./php/profile.php",
        dataType: "html",
        success: function (data) {
            // alert("data = "+data)
            var d = JSON.parse(data);
            // alert(d);
            $('#fname').val(d.fname);
            $('#lname').val(d.lname);
            $('#age').val(d.age);
            $('#contact').val(d.contact);



        }
    })


}


//if user not logged in->redirects to login page
else {
    alert("You haven't logged in ! Kindly please login ")
    window.location = "./login.html";
}

