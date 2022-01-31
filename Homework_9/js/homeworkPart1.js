$("input").val();


let button = $("button");
button.on("click", function(){
    $("h1").text($("input").val());
    $("input").val("")
});