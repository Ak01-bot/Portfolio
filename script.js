// Smooth Scroll for navigation links
/*document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });


     // Close the nav menu if open (for mobile)
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }

  });
});

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}*/


// Smooth Scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Automatically close the mobile nav after clicking a link
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
    
  });
});

// Toggle menu on hamburger click
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}








const typedText = document.querySelector("#typewriter");
const textArray = [
  "Data Analyst",
  "Open Source Contributor",
  "Web Developer"
];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) type();
});














document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});






/*let scrollIndex = 0;
const track = document.getElementById("serviceCarousel");
const cardWidth = track.querySelector(".service-card").offsetWidth + 20;

function slideRight() {
  if ((scrollIndex + 3) < track.children.length) {
    scrollIndex++;
    track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
  }
}

function slideLeft() {
  if (scrollIndex > 0) {
    scrollIndex--;
    track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
  }
}*/


let scrollIndex = 0;
const track = document.getElementById("serviceCarousel");
const cardWidth = track.querySelector(".service-card").offsetWidth + 20;
const totalCards = track.children.length;

// Calculate how many cards are visible based on screen width
function getVisibleCardsCount() {
  return window.innerWidth < 768 ? 1 : 3; // 1 card on mobile, 3 on larger screens
}

function slideRight() {
  const visibleCards = getVisibleCardsCount();
  const maxIndex = totalCards - visibleCards;

  if (scrollIndex < maxIndex) {
    scrollIndex++;
  } else {
    scrollIndex = 0; // Reset to start
  }

  track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}

function slideLeft() {
  if (scrollIndex > 0) {
    scrollIndex--;
  } else {
    // Go to the last visible set
    scrollIndex = totalCards - getVisibleCardsCount();
  }

  track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}



// Projects section carousel logic
/*let projectsScrollIndex = 0;
const projectsTrack = document.getElementById("projectsCarousel");
const projectsCardWidth = projectsTrack.querySelector(".projects-card").offsetWidth + 20;

function slideProjectRight() {
  if ((projectsScrollIndex + 3) < projectsTrack.children.length) {
    projectsScrollIndex++;
    projectsTrack.style.transform = `translateX(-${projectsScrollIndex * projectsCardWidth}px)`;
  }
}

function slideProjectLeft() {
  if (projectsScrollIndex > 0) {
    projectsScrollIndex--;
    projectsTrack.style.transform = `translateX(-${projectsScrollIndex * projectsCardWidth}px)`;
  }
}*/


//*try this with error handling

let projectsScrollIndex = 0;
const projectsTrack = document.getElementById("projectsCarousel");

function getCardWidth() {
  const card = projectsTrack.querySelector(".projects-card");
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  const marginRight = parseFloat(style.marginRight || 0);
  const marginLeft = parseFloat(style.marginLeft || 0);
  return card.offsetWidth + marginLeft + marginRight;
}

function getVisibleCardCount() {
  const containerWidth = document.querySelector(".projects-carousel-container").offsetWidth;
  const cardWidth = getCardWidth();
  return cardWidth ? Math.floor(containerWidth / cardWidth) : 1;
}

function slideProjectRight() {
  const totalCards = projectsTrack.children.length;
  const visibleCards = getVisibleCardCount();
  const maxIndex = totalCards - visibleCards;

  if (projectsScrollIndex < maxIndex) {
    projectsScrollIndex++;
  } else {
    // Loop back to start
    projectsScrollIndex = 0;
  }

  updateCarouselPosition();
}

function slideProjectLeft() {
  const totalCards = projectsTrack.children.length;
  const visibleCards = getVisibleCardCount();
  const maxIndex = totalCards - visibleCards;

  if (projectsScrollIndex > 0) {
    projectsScrollIndex--;
  } else {
    // Loop to end
    projectsScrollIndex = maxIndex;
  }

  updateCarouselPosition();
}

function updateCarouselPosition() {
  const cardWidth = getCardWidth();
  const offset = projectsScrollIndex * cardWidth;
  projectsTrack.style.transform = `translateX(-${offset}px)`;
}


// Recalculate on window resize
window.addEventListener('resize', () => {
  updateCarouselPosition();
});





















//If trying for mobile view
/*let projectsScrollIndex = 0;
const projectsTrack = document.getElementById("projectsCarousel");

function getCardWidth() {
  const card = projectsTrack.querySelector(".projects-card");
  const style = window.getComputedStyle(card);
  const marginRight = parseFloat(style.marginRight);
  const marginLeft = parseFloat(style.marginLeft);
  return card.offsetWidth + marginLeft + marginRight;
}

function getVisibleCardCount() {
  const containerWidth = document.querySelector(".projects-carousel-container").offsetWidth;
  const cardWidth = getCardWidth();
  return Math.floor(containerWidth / cardWidth);
}

function slideProjectRight() {
  const totalCards = projectsTrack.children.length;
  const visibleCards = getVisibleCardCount();

  if (projectsScrollIndex + visibleCards < totalCards) {
    projectsScrollIndex++;
    updateCarouselPosition();
  }
}

function slideProjectLeft() {
  if (projectsScrollIndex > 0) {
    projectsScrollIndex--;
    updateCarouselPosition();
  }
}

function updateCarouselPosition() {
  const cardWidth = getCardWidth();
  const offset = projectsScrollIndex * cardWidth;
  projectsTrack.style.transform = `translateX(-${offset}px)`;
}

// Reset position on window resize (optional but useful)
window.addEventListener('resize', () => {
  updateCarouselPosition();
});*/


