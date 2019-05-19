var myEdit = localStorage.getItem("Edit");

$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + myEdit,
        type: "GET",
        success: function(response) {
            var postTitle = $("#postTitle").val(response.title);
            var postBody = $("#postBody").val(response.body);
            $("#save").on("click", function() {
                if (postBody.val() == "" || postTitle.val() == "") {

                    alert("Can't Save an empty Fields");
                } else {
                    $.ajax({
                        url: "https://jsonplaceholder.typicode.com/posts/" + myEdit,
                        type: "PUT",
                        success: function(response) {
                            console.log("Successfull Edit");
                            localStorage.setItem("Edited", myEdit);
                            console.log(localStorage.getItem("Edited"));
                        }
                    })
                }
            })
        }
    })
})