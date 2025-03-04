let ser = document.querySelector(".services")
let sub = document.querySelector(".submenu")


ser.addEventListener('mouseenter',()=>{
    console.log("hey");
    
})

// circle move with cursor
const cursor = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
      x: e.pageX,  
      y: e.pageY,  
      duration: 0.2,
      ease: "power2.out",
  });
});

// cursor on navbar ..................
document.querySelector(".menu").addEventListener('mouseenter' , function(){
  cursor.style.opacity = 0.2
  cursor.style.width = '50px'
  cursor.style.height = '50px'

})
document.querySelector(".menu").addEventListener('mouseleave' , function(){
  cursor.style.opacity = 1
  cursor.style.width = '20px'
  cursor.style.height = '20px'
})

// cursor on hero content...............................................

// on row 1
document.querySelector(".hero-row-1").addEventListener('mouseenter' , function(){
  cursor.style.opacity = 0.4
  cursor.style.width = '50px'
  cursor.style.height = '50px'

})
document.querySelector(".hero-row-1").addEventListener('mouseleave' , function(){
  cursor.style.opacity = 1
  cursor.style.width = '20px'
  cursor.style.height = '20px'
})

// on row2
document.querySelector(".hero-row-2").addEventListener('mouseenter' , function(){
  cursor.style.opacity = 0.4
  cursor.style.width = '50px'
  cursor.style.height = '50px'

})
document.querySelector(".hero-row-2").addEventListener('mouseleave' , function(){
  cursor.style.opacity = 1
  cursor.style.width = '20px'
  cursor.style.height = '20px'
})



// side bar coding.......................................................
let menubtn = document.querySelector(".menu-bar");
let sidebar = document.querySelector(".sidebar");

let isSidebarVisible = false; // Track the visibility of the sidebar

menubtn.addEventListener("click", function() {
  sidebar.style.display = 'block'
  if (isSidebarVisible) {
    // If the sidebar is visible, animate it to hide
    gsap.to('.sidebar', {
      zIndex: -1, // Move it behind
      width: "0%", // Collapse the width
      opacity: 0, // Fade it out
      duration: 0.5, // Duration of the animation
      ease: "power2.inOut"
    });
  } else {
    // If the sidebar is hidden, animate it to show
    gsap.to('.sidebar', {
      zIndex: 4, // Bring it to the front
      width: "100%", // Set the width to 40%
      opacity: 1, // Fade it in
      duration: 0.5, // Duration of the animation
      ease: "power2.inOut"
    });

    gsap.from('.side-menu ul li', {
      opacity: 0, // Fade in from opacity 0
      x: 100, // Slide in from x: 100
      stagger: 0.2, // Stagger the animation by 0.2 seconds
      duration: 0.5, // Duration of the animation
      ease: "power2.inOut"
    });
  }
  isSidebarVisible = !isSidebarVisible; // Toggle the state

});


// hero content and achievments animation.................................................
let  tl = gsap.timeline()
tl.to(".hero-sec ",{
  scale:0.4,
  opacity:0.2,
  scrollTrigger:{
    trigger:'.hero-sec',
    scroller:'body',
    // markers:true,
    start:"50% 50%",
    end:"80% 50%",
    scrub:1,
    pin:true
  }
},'a')
.to(".section-2",{
  // yPercent: -100,
  y:-400,
  scrollTrigger:{
    trigger:'.section-2',
    scroller:'body',
    // markers:true,
    start:"-50% 50%",
    end:"50% 50%",
    scrub:1
  }
},'a')

// section-2 number count code...............................................
// number counting code
gsap.to('.box',{
  scrollTrigger:{
    scroller:'body',
    // markers:true,
    start:'10% 40%',
    end:'10% 40%',
    onEnter: count,
  }
})

// function to count
function count() {
  let box = document.querySelectorAll(".count");

  box.forEach((el) => {
    let startVal = 0;
    let endVal = parseInt(el.getAttribute("value"));
    let duration = 1000 / endVal; // Adjust duration dynamically

    let counter = setInterval(() => {
      startVal++;
      el.innerText = startVal + "+";
      if (startVal === endVal) clearInterval(counter);
    }, duration);
  });
}

//section 3 strt coding....................................................................
let sec3Vid = document.querySelector(".sec3-video");
gsap.from(sec3Vid , {
  width:1180,
  scrollTrigger: {
    scroller: "body",
    trigger: ".sec3-left-vid",
    start: "20% 50%",
    end: "30% 50%",
    scrub: 2,
    // markers: true
  }
})

//in sectioin-4 stories section right.....................................
col1 = document.querySelector(".col1");
col2 = document.querySelector(".col2");
col3 = document.querySelector(".col3");

let t = gsap.timeline()

// for col1..................................................................
t.to(col1, {
    transform : "translateY(4.2rem)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".stories",
      start: "30% 50%",
      end: "60% 50%",
      scrub: 2,
      // markers: true
    }
  },'a');

// for col2..................................................................
  gsap.to(col2, {
    transform : "translateY(2rem)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".stories",
      start: "30% 50%",
      end: "60% 50%",
      scrub: 2,
      // markers: true
    }
  },'a');

// for col3..................................................................
  gsap.to(col3, {
    transform : "translateY(-3.2rem)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".stories",
      start: "30% 50%",
      end: "60% 50%",
      scrub: 2, 
      // markers: true
    }
  },'a');


  // section 5 coding


//   document.addEventListener("DOMContentLoaded", function() {
//     const container = document.getElementById("container");
//     const scroll = document.getElementById("scroll");
    
//     for (let i = 0; i < 8; i++) {
//         let box = document.createElement("div");
//         box.className = "box w-[40vw] h-[60vh] bg-white shadow-lg rounded-xl p-4 flex-shrink-0";
//         box.innerHTML = `
//             <img src="https://via.placeholder.com/300" alt="Box ${i+1}" class="w-full h-40 object-cover rounded-lg">
//             <h2 class="text-xl font-semibold mt-4">Box ${i+1}</h2>
//             <p class="text-gray-600 mt-2">This is a description of the box.</p>
//         `;
//         scroll.appendChild(box);
//     }
    
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(".box", {
//         xPercent: -200 * (12 - 1),
//         ease: "none",
//         scrollTrigger: {
//             trigger: container,
//             start:'40% 50%',
//             end : "120% 50%",
//             pin: true,
//             // markers:true,
//             scrub: 1,
//             // end: "+=300",
//             anticipatePin: 1,
//         },
//     });
// });


