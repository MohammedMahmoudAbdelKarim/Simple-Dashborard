$(document).ready(function() {

        /* To Display Data in Dashboard Page */
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            type: "GET",
            success: function(response) {
                const resp = response;
                resp.forEach(function(element, index) {
                        const myLi = document.createElement("li");
                        resID = resp[index].id;
                        resTitle = resp[index].title;
                        resBody = resp[index].body;
                        num = resp.length;
                        myLi.innerHTML = `<div id="title" class="${resTitle}"> ${resp[index].title}</div><div id="content" class="${resBody}"> ${resp[index].body}</div> <div id="btns"><button class="edit" id="${resID}">Edit</button><button class="delete" id="${resID}">Delete</button></div>`;
                        $("#list").append(myLi);
                        $("#num").html(num + " Posts");
                        $("#emailDisplay").html(" <span class='em'>Admin's Email :</span> " +
                            localStorage.getItem("Email"))
                    })
                    /* On Delete */
                $(".delete").on('click', function(e) {
                        if (confirm('Are you sure you want to delete this post ?')) {

                            $.ajax({
                                url: "https://jsonplaceholder.typicode.com/posts/" + resID,
                                type: "DELETE",
                                data: {
                                    "id": resID,
                                    "title": resTitle,
                                    "body": resBody
                                },
                                success: function(response) {
                                    num--;
                                    $(e.target).parent().parent().remove();

                                    localStorage.setItem(e.target.id, e.target.id);
                                    $("#num").html(num + " Posts");
                                },
                                error: function(response) { console.log("Sorry") }
                            })
                        }
                    })
                    /* On Edit */
                $(".edit").on("click", function(e) {
                    console.log(this);
                    localStorage.setItem("Edit", e.target.id);
                    var myID = localStorage.getItem("Edit");
                    console.log(localStorage.getItem("Edit"));
                    window.location.href = "edit.html";
                })


            },
            error: function(response) {
                console.log("Faild Loaded");
            }
        })
    })
    /* Blog Page */
$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success: function(response) {
            response.forEach(function(ele, index) {
                myDiv = document.createElement("div");
                myDiv.innerHTML = `<h3 class="id-blog">${response[index].id}</h3>
                    <h4 class="title-blog">${response[index].title}</h4>
                    <p class="body-blog">${response[index].body}</p>`;
                $("#newBlog").append(myDiv);
            })

        }
    })
})