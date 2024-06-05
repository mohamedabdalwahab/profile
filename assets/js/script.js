/**
   * Hero type effect
   */
    let n;
  document.addEventListener('DOMContentLoaded',HeroTypeEffect);
 let relod = document.getElementById('relod');
function HeroTypeEffect(){
    if (n) n.destroy(); // التحقق من أن n معرف قبل استدعاء destroy
 let typed = document.querySelector('.typed');
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(';');
     n = new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

};
relod.addEventListener('click', HeroTypeEffect);
// -----------------------------------------------
//------------------------------------------------
// steart booton go up 
let up = document.querySelector(".toUp");

window.onscroll = function () {
    if (window.scrollY >= 281.25) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};

up.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
// and booton go up

    /*<![CDATA[*/
    document.oncontextmenu = function (event) {
        if (
            event.target.tagName != "INPUT" &&
            event.target.tagName != "TEXTAREA"
        ) {
            event.preventDefault();
        }
    };
document.ondragstart = function () {
    if (
        event.target.tagName != "INPUT" &&
        event.target.tagName != "TEXTAREA"
    ) {
        event.preventDefault();
    }
};
      /*]]>*/
