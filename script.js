const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true, // Enables smooth scrolling on mobile devices
    inertia: 0.8, // Adjust the inertia of the scroll
    getDirection: true, // Get scroll direction
    getSpeed: true // Get scroll speed
  });

function mouse(e){
    let x= e.clientX;
    let y=e.clientY;
    circle.style.transform = `translate(${x}px, ${y}px)`;
}

  
    let circle= document.getElementById("circle");
    document.addEventListener('mousemove',mouse)

    function firstpageanimation(){
        var tl=gsap.timeline();
    
        tl.from("#nav",{
            y:'-10',
            opacity:0,
            duration:2.5,
            ease:Expo.easeInout,
            
        })
        .from(".herofooter",{
            y:'-20',
            opacity:0,
            duration:2,
            ease:Expo.easeInout,
            delay:-1,
        })
        console.log(document.querySelectorAll(".boundingelm"));
    }

   
    firstpageanimation()

    document.querySelectorAll(".elements.elm").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;
    
        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: "power3",
                duration: 0.5,
            });
        });
    
        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: "power3",
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            });
        });
    });
    
