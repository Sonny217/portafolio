const header = document.querySelector("header");

const first_skill = document.querySelector(".skill");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");


window.addEventListener("scroll", ()=>{ if (!skillsPlayed) skillsCounter();
 if(!mlPlayed)mlCounter();
});

function UpdateCount(num, maxNum) { let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {UpdateCount(num, maxNum);}, 12 );
    }
}

/*----------------Sticky Navbar----------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll",stickyNavbar);
/*----------------Reveal Animacion----------------------*/
let  sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});
sr.reveal(".showcase-info",{ delay:500 });
sr.reveal(".showcase-image",{origin: "top", delay: 600 });

/*----------------Skills progress bar Animacion----------------------*/

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    
    if (window.innerHeight >= topPosition + el.offsetHeight) return true; return false;
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill)) return;

    skillsPlayed = true;
    

    sk_counters.forEach((counter, i) =>{
        let target = +counter.dataset.target; let strokeValue = 427 - 427 * (target / 100);
        console.log(strokeValue);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {UpdateCount(counter, target);
        }, 400);

    });

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards"));
} 

/*----------------Services Counter Animation----------------------*/

let mlPlayed = false;

function mlCounter(){
    if(!hasReached(ml_section)) return; 
    mlPlayed = true;
    ml_counters.forEach(ctr => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            UpdateCount(ctr, target);
        }, 400);
        
    });

}