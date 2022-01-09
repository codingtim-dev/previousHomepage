const $icon = document.querySelector(".ic_arrow");
const $arrow = document.querySelector(".arrow");
const $startsec = document.querySelector(".content");


$icon.animate([
    {
        opacity: "0"
    },
    {
        opacity: "1"
    }
],{
    duration: 700,
    iterations: 1
});


//$icon.onclick = () => {
    $icon.animate([
        {
            top: "0"
        },
        {
            top: "10px"
        },
        {
            top: "0px"
        }
    ],{
        duration: 1500,
        iterations: Infinity
    });
//}

$icon.onclick = () => {

    const y = document.getElementById("main-content").getBoundingClientRect().top + window.pageYOffset ;

    window.scroll({top: y})  ;

    //document.getElementById("intro").scrollIntoView({bottom: "0%"})
}

