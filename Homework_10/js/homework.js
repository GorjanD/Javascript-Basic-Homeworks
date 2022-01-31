$(document).ready(function () {


    let button = $("button");
    button.on("click", function () {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                response.json()
                    .then(result => {
                        let toDoArray = []
                        for (todo of result) {
                            if (todo.completed === true) {
                                let status1 = "Completed"
                                toDoArray.push(`<b>Id:</b> ${todo.id} <b>Title:</b> ${todo.title} <b><i>Status:</i></b> ${status1} <br>`)
                            }
                            else {
                                let status2 = "Not Completed"
                                toDoArray.push(`<b>Id:</b> ${todo.id} <b>Title:</b> ${todo.title} <b><i>Status:</i></b> ${status2} <br>`)
                            }
                            $("p").html(toDoArray)
                        }
                    })
            })
    })
})