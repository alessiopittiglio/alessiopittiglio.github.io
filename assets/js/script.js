function handleImageError(img) {
  img.style.minHeight = '120px'; // Set a minimum height for the image
  adjustCardHeight(img);
}

const adjustCardHeight = img => {
  const card = img.closest('.card');
  const contentHeight = card.querySelector('.card-content').offsetHeight;
  const imageHeight = img.offsetHeight;
  const minHeight = 120;

  const cardHeight = Math.max(minHeight, contentHeight + imageHeight);
  card.style.height = `${cardHeight + 10}px`;
};

window.addEventListener('resize', () => {
  const cards = document.querySelectorAll('.card img');
  cards.forEach(img => adjustCardHeight(img));
});

window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card img');
  cards.forEach(img => adjustCardHeight(img));
});

document.addEventListener("DOMContentLoaded", function () {
  const removeGrabClass = function () {
      const grabbedCard = document.querySelector('.card.grab');
      if (grabbedCard) {
          grabbedCard.classList.remove('grab');
      }
  };

  document.addEventListener('mouseup', removeGrabClass);
  document.addEventListener('touchend', removeGrabClass);

  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
      card.addEventListener('mousedown', function () {
          this.classList.add('grab');
      });

      card.addEventListener('touchstart', function () {
          this.classList.add('grab');
      });

      card.addEventListener('mouseleave', function () {
          this.classList.remove('grab');
      });

      card.addEventListener('touchend', function () {
          this.classList.remove('grab');
      });
  });
});
