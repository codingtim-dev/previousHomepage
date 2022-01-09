
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("/index.html#"+id).offset().top},'slow');
}




function scrolldiv(section, offset) {

    bsection = section
    boffset = offset

   
        

        window.scrollTo(0, 
            findPosition(document.getElementById(section), offset));
     
    if(window.innerWidth < 1300){
        resizenav()
    }
    
    
    
}
function findPosition(obj, offset) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop- offset];
    }
}

function scaleNav() {

   

    var x = document.getElementById("navbar");
    if(x.className === "sticky"){
        
        x.className += " responsive";
        
    }else{
        x.className = "sticky";
        
    }
}

function resizenav() {

    var x = document.getElementById("navbar");
    x.className = "sticky"
}

