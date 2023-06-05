/*document.lastScrollPosition=0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {

    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up' ;
    const sections= [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {

      const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
      if(destIndex >=0 && destIndex < sections.length){
  
          document.onWayTo = destIndex;  
          window.scroll(0, sections[destIndex].offsetTop);
      }

    }


    sections.forEach((section,index ) => {
        if (window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
            section.className = 'active';
            if (document.onWayTo === index){
              document.onWayTo=null;
            }
        } else {
          section.className = '';
        }
    })

    document.lastScrollPosition=window.pageYOffset;

}) */

/* document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  if (document.onWayTo === null) {
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
      document.onWayTo = destIndex;
      sections[destIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const isCentered = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    if (isCentered) {
      document.lastCentered = index;
      section.classList.add('active');
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    } else {
      section.classList.remove('active');
    }
  });

  document.lastScrollPosition = window.pageYOffset;
});
*/

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  if (document.onWayTo === null) {
    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
      document.onWayTo = destIndex;
      sections[destIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const isCentered = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    if (isCentered) {
      document.lastCentered = index;
      section.classList.add('active');
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    } else {
      section.classList.remove('active');
    }
  });

  document.lastScrollPosition = window.pageYOffset;
});


// this one is working 

/*document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
        window.scrollTo(0, sections[destIndex].offsetTop);
    }

    sections.forEach((section, index) => {
        const sectionOffset = section.getBoundingClientRect().top + window.pageYOffset;
        if (Math.abs(window.pageYOffset - sectionOffset) < 1) {
            document.lastCentered = index;
        }
    });

    document.lastScrollPosition = window.pageYOffset;
}); */

/* document.lastScrollPosition = 0;
document.lastCentered = 0;

const scrollHandler = () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
        window.scrollTo(0, sections[destIndex].offsetTop);
        document.removeEventListener('scroll', scrollHandler); // Remove the scroll event listener
        setTimeout(() => {
            document.addEventListener('scroll', scrollHandler); // Re-add the scroll event listener after a delay (adjust the delay as needed)
        }, 500); // Delay in milliseconds before re-adding the scroll event listener
    }

    sections.forEach((section, index) => {
        const sectionOffset = section.getBoundingClientRect().top + window.pageYOffset;
        if (Math.abs(window.pageYOffset - sectionOffset) < 1) {
            document.lastCentered = index;
        }
    });

    document.lastScrollPosition = window.pageYOffset;
};

document.addEventListener('scroll', scrollHandler);
*/



/*document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
  if (destIndex >= 0 && destIndex < sections.length) {
    window.scrollTo(0, sections[destIndex].offsetTop);
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
    }
  });

  document.lastScrollPosition = window.pageYOffset;
}); */

/*document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  let nextCentered;
  if (direction === 'up') {
    nextCentered = Math.max(document.lastCentered - 1, 0);
  } else {
    nextCentered = Math.min(document.lastCentered + 1, sections.length - 1);
  }

  const nextSection = sections[nextCentered];
  window.scrollTo(0, nextSection.offsetTop);

  document.lastCentered = nextCentered;
  document.lastScrollPosition = window.pageYOffset;
}); */

/*document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  let destIndex;
  if (direction === 'up') {
    destIndex = Math.max(document.lastCentered - 1, 0);
  } else {
    destIndex = Math.min(document.lastCentered + 1, sections.length - 1);
  }

  const destinationSection = sections[destIndex];
  const sectionOffsetTop = destinationSection.offsetTop;
  const sectionHeight = destinationSection.offsetHeight;

  const isCentered = window.pageYOffset >= sectionOffsetTop && window.pageYOffset < sectionOffsetTop + sectionHeight;
  if (!isCentered) {
    window.scrollTo(0, sectionOffsetTop);
  }

  document.lastCentered = isCentered ? destIndex : document.lastCentered;
  document.lastScrollPosition = window.pageYOffset;
}); */

/*const sections = document.querySelectorAll('section');

// Helper function to check if an element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle scroll and highlight active section
const handleScroll = () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
};

// Add scroll event listener
document.addEventListener('scroll', handleScroll);

*/

