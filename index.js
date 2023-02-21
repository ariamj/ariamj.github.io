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

/* SCROLL TRACKING
 * Cite: https://youtu.be/VgS5CP7zlXE */
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