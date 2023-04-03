// document.querySelector("button").addEventListener("click",handleClick);

var n = document.querySelectorAll(".drum").length; // total number of buttons
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);// checking buttons with class drum and adding event listener to them
}
function handleClick() {
    var button = this.innerHTML; // to capture what letter is clicked
    makeSound(button);
    animationWhenClick(button);
}
// sounds with keypress in keyboard
document.addEventListener("keypress", function (d) { // we have written psudo function here

    makeSound(d.key); // to detect which key i pressed
    animationWhenClick(d.key);
});
function makeSound(keye) {
    switch (keye) {
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log("ok");
            break;
    }
}

function animationWhenClick(currentKey)
{
    var activekey = document.querySelector("." + currentKey);
    activekey.classList.add("pressed");
    setTimeout(function() {
        activekey.classList.remove("pressed"),100
    });
}