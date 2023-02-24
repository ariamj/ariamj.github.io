import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

// function displayWhenVisible(id) {
//     const elem = document.getElementById(id);
//     elem.style.visibility = visible;
// };

// function inViewport(elem) {
//     var boundingPos = elem.getBoundingClientRect();
//     return !(boundingPos.top > innerHeight || boundingPos.bottom < 0);
// };

// var element = document.querySelector('dh2');

// document.addEventListener('scroll', event => {
//     if(inViewport(element)) {
//         // element.style.visibility = visible;
//         element.style.color = 0x000000;
//     } else {
//         // element.style.visibility = hidden;
//         element.style.color = 0xff0000;
//     }
// });

/**
 * CHECK IF ELEMENT IS IN VIEWPORT
 * Cite: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
 */
function isInViewport(elem) {
    let boundingRect = elem.getBoundingClientRect();
    return (boundingRect.top >= 0 
        && boundingRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && boundingRect.left >= 0
        && boundingRect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

const divElems = document.querySelectorAll(".section");

document.addEventListener('scroll', function() {
    divElems.forEach(elem => {
        if(isInViewport(elem)) {
            elem.classList.add("fade-in-element");
            elem.classList.remove("hidden");
        }
    })
})

/**
 * SCROLL TRACKING
 * Cite: https://youtu.be/VgS5CP7zlXE 
 */
const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

/**
 * SECTION ANIMATION
 */
const animatedSections = document.querySelectorAll(".section");

// animatedSections.forEach(section => {
//     const sectionOffsetTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     section.animate(
//         {
//             opacity: ["0", "1"]
//         },
//         {
//             duration: 1,
//             timeline: new ScrollTimeline({
//                 scrollOffsets: [
//                     // CSS.px(sectionOffsetTop + sectionHeight - window.innerHeight),
//                     // CSS.px(sectionOffsetTop - 200),
//                     {target: section, edge: "end", threshold: "1"},
//                     {target: section, edge: "start", threshold: "1"},
//                 ]
//             })
//         }
//     )
// });

/**
 * Image Animation
 * Cite: https://youtu.be/VgS5CP7zlXE
 */
const animatedImages = document.querySelectorAll(".image-rotate-in");

animatedImages.forEach(image => {
    const imageOffsetTop = image.offsetTop;
    const imageHeight = image.offsetHeight;

    const animatedImageTimeline = new ScrollTimeline({
        // scrollOffsets: [
        //     {target: image, edge: "end", threshold: "0"},
        //     {target: image, edge: "start", threshold: "1"}
        // ],
        scrollOffsets: [
            CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
            CSS.px(imageOffsetTop - 300),
        ],
    });

    image.animate(
        {
            transform: [
                "perspective(1000px) rotateX(45deg)", 
                "perspective(1000px) rotate(0)",
            ],
            opacity: ["0", "1"]
        },
        {
            duration: 1,
            easing: "linear",
            timeline: animatedImageTimeline,
        }
    )
});

// const animatedImageTimeline = new ScrollTimeline({
//     scrollOffsets: [
//         {target: animatedImage, edge: "end", threshold: "0"},
//         {target: animatedImage, edge: "start", threshold: "1"}
//     ],
// });

// animatedImage.animate(
//     {
//         transform: [
//             "perspective(1000px) rotateX(45deg)", 
//             "perspective(1000px) rotate(0)",
//         ],
//         opacity: ["0", "1"]
//     },
//     {
//         duration: 1, 
//         timeline: animatedImageTimeline,
//     }
// )


/**
 * EXPERIENCE SECTION
 */

/* Cite: https://www.w3schools.com/howto/howto_js_accordion.asp */
let acc = document.getElementsByClassName("accordion");
let i;

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}