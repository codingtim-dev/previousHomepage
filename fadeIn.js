window.addEventListener("scroll", function(){

    var introtext = document.querySelector(".introduction-field");
    var introtext_pos = introtext.getBoundingClientRect();

    var devcard = document.querySelector(".dev");
    var devcard_pos = devcard.getBoundingClientRect();

    var projects = this.document.querySelector(".projects-field");
    var projects_pos = projects.getBoundingClientRect();

    var aboutme = document.querySelector(".aboutme");
    var aboutme_pos = aboutme.getBoundingClientRect();

    if(introtext_pos.top < window.innerHeight && introtext_pos.bottom >= 0){

        this.document.getElementById("introtext").style.opacity = "1";
        this.document.getElementById("introtext").style.transition = "opacity .7s ease-in-out"
    }else{
        this.document.getElementById("introtext").style.opacity = "0";
    }

    if(devcard_pos.top < window.innerHeight && devcard_pos.bottom >= 0){

        this.document.getElementById("card_one").style.opacity = "1";
        this.document.getElementById("card_one").style.transition = "opacity 1s ease-in-out"

        this.document.getElementById("card_two").style.opacity = "1";
        this.document.getElementById("card_two").style.transition = "opacity 1.5s ease-in-out"
    }else{
        
        
        this.document.getElementById("card_one").style.opacity = "0";

        this.document.getElementById("card_two").style.opacity = "0";
    }

    if(projects_pos.top < window.innerHeight && projects_pos.bottom >= 0){

        this.document.getElementById("projects").style.opacity = "1";
        this.document.getElementById("projects").style.transition = "opacity .7s ease-in-out"
    }else{
        this.document.getElementById("projects").style.opacity = "0";
    }

    if(aboutme_pos.top < window.innerHeight && aboutme_pos.bottom >= 0){

        this.document.getElementById("aboutme").style.opacity = "1";
        this.document.getElementById("aboutme").style.transition = "opacity .7s ease-in-out"

        this.document.getElementById("aboutimg").style.opacity = "1";
        this.document.getElementById("aboutimg").style.transition = "opacity .7s ease-in-out"
    }else{
        this.document.getElementById("aboutme").style.opacity = "0";

        this.document.getElementById("aboutimg").style.opacity = "0";
    }
    


})