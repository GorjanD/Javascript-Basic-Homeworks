let header = document.getElementById("myTitle");
header.innerText = "No! This is not a cool page!"

let paragraph1 = document.getElementsByClassName("paragraph")[0];
paragraph1.innerText = "This is barely an exercise, and it's not easy."

let paragraph2 = document.getElementsByClassName("paragraph second")[0];
paragraph2.innerText = "Stop lying to me!"

let text = document.getElementsByTagName("text")[0];
text.innerText = "Finish your sentences properly!"

let header3 = document.getElementsByTagName("h3")[0];
header3.innerText = "Your tyranny ends here!"

let header2 = header3.previousElementSibling;
header2.innerText = "I refuse!"