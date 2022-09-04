
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("got clicked")
        // var audio = new Audio('sounds/crash.mp3');
        // audio.play();
        var buttonInnerHTML = this.innerHTML
console.log(this.innerHTML);
        switch (buttonInnerHTML) {
            case "A":
                var audio1 = new Audio('sounds/crash.mp3');
                audio1.play();
                break;
            case "s":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
                break;
            case "h":
                var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
                break;
            case "w":
                var audio4 = new Audio('sounds/tom-1.mp3');
                audio4.play();
                break;
            case "i":
                var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
                break;
            case "n":
                var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
                break;
            case "i":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
                break;
            default:
           console.log(buttonInnerHTML);
        }
    });
}