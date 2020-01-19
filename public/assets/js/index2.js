$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    var burger_name = $("#new-burger")

    $(document).on("click", "#add-burger", handleCreateBurger);
    $(document).on("click", ".change-devoured", handleBurgerDevoured);

    // Getting the initial list of Authors
    getBurgers();

    // A function to handle what happens when the form is submitted to create a new Author
    function handleCreateBurger(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!burger_name.val().trim().trim()) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        createBurger({
            name: burger_name
                .val()
                .trim()
        });
    }

    // A function for creating an author. Calls getAuthors upon completion
    function createBurger(burgerData) {
        $.post("/api/burger", burgerData)
            .then(getBurgers);
    }

    // Function for creating a new list row for authors
    function createBurgerRow(burgerData) {
        console.log(burgerData);
        var newTr = $("<tr>");
        newTr.data("author", burgerData);
        newTr.append("<td>" + burgerData.name + "</td>");
        newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
        newTr.append("<td><a href='/blog?author_id=" + burgerData.id + "'>Go to Posts</a></td>");
        newTr.append("<td><a href='/cms?author_id=" + burgerData.id + "'>Create a Post</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
        return newTr;
    }

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getBurgers() {
        $.get("/api/burger", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createBurgerRow(data[i]));
            }
            renderBurgerList(rowsToAdd);
            nameInput.val("");
        });
    }

    // A function for rendering the list of authors to the page
    function renderBurgerList(rows) {
        burgerList.children().not(":last").remove();
        burgerContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            burgerList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no authors
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create an Author before you can create a Post.");
        burgerContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("burger");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/burger/" + id
        })
            .then(getBurgers);
    }
});
