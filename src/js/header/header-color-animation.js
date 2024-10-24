import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');
  const headerSvgs = document.querySelectorAll('.header-svg');
  const headerSvgsFill = document.querySelectorAll('.header-svg-fill');
  const spacesSection = document.querySelector('#spaces-content');

  if (spacesSection) {
    ScrollTrigger.create({
        scroller: "#main-content-wrapper",
        trigger: spacesSection,
        start: "top 10%",
        end: "bottom 10%",
        onEnter: () => updateHeaderColor('spaces'),
        onEnterBack: () => updateHeaderColor('spaces'),
        onLeave: () => updateHeaderColor('default'),
        onLeaveBack: () => updateHeaderColor('default'),
    });
  }

  function updateHeaderColor(state) {
    const colors = {
        default: { color: '#FCFCFC', borderColor: "rgba(252, 252, 252, 0.4)" },
        spaces: { color: '#EBE0A1', borderColor: "#DECC62" },
    };

    const newColor = colors[state];
    console.log(`Changing header color to: ${newColor}`);

    gsap.to(header, {
        color: newColor.color,
        borderColor: newColor.borderColor,
        duration: 0.3,
    });
    headerSvgs.forEach(svg => {
        gsap.to(svg, {
            stroke: newColor.color,
            duration: 0.3,
        });
    });
    headerSvgsFill.forEach(svg => {
        gsap.to(svg, {
            fill: newColor.color,
            duration: 0.3,
        });
    });
  }
});