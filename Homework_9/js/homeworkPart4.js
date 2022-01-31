$(document).ready(function () {

    $("#input1").val();
    $("#input2").val();
    $("#input3").val();

    let button = $("button");
    button.on("click", function () {
        let sum = 0
        sum = ((parseInt($("#input1").val()) + parseInt($("#input2").val()) + parseInt($("#input3").val()))/3)

        if (sum < 10) {
            $("h1").text(sum);
            $("h1").css("color", "red")
        }
        else if (sum >= 10) {
            $("h1").text(sum);
            $("h1").css("color", "green")
        }
    });
});

