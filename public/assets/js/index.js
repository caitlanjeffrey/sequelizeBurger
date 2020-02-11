// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("javacript loaded")
$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault()

        var id = $(this).data("id")
        var devouredState = {
            devoured: 1
        }

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(result) {
            console.log("Burger devoured", result)
            location.reload();
        })
    })

    $("#add-burger").on("click", function(event) {
        event.preventDefault()

        var newBurger = {
            burger_name: $("#new-burger").val().trim().toString()
        }

        console.log(newBurger)
        
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger!")
            location.reload()
        })
    })
})