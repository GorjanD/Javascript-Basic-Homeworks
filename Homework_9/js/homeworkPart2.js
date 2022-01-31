$(document).ready(function () {

    $("input").first().val();
    $("#colorPicker").val();

    let button = $("button");
    button.on("click", function () {
        if ($("input").first().val() === "") {
            $("h3").text("ERROR! Enter text in the input box.")
            $("h3").css("color", "red")
        }
        else {
            $("h1").text($("input").first().val());
            $("h1").css("color", $("#colorPicker").val())
            $("h3").text("There you go!")
            $("h3").css("color", "green")
            $("input").first().val("")
        }
    });

});