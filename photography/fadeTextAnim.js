window.addEventListener("scroll", function(){
    var card = this.document.querySelector(".intro");
    var pos1 = card.getBoundingClientRect();

    var headline = this.document.getElementById("headline");
    var portrait = document.getElementById("portrait");
    var text = document.getElementById("text");

    if(pos1.top < window.innerHeight && pos1.bottom >= 0){

        headline.style.transition = "opacity 1.2s ease"
        headline.style.opacity = "1"

        portrait.style.transition = "opacity 1.5s ease"
        portrait.style.opacity = "1"

        text.style.transition = "opacity 1.8s ease"
        text.style.opacity = "1"

    }
})