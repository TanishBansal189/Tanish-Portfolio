document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach((bar) => {
    const finalWidth = bar.getAttribute('data-width'); // Use data-width for final width
    bar.style.width = '0%'; // Start from 0%

    setTimeout(() => {
      bar.style.transition = 'width 1s ease-in-out'; // Set transition for smooth animation
      bar.style.width = finalWidth; // Set to final width from data-width attribute
    }, 400); // Add slight delay before the animation starts
  });
});
