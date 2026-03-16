// Lightbox functionality for repair guide images
export function onRouteDidUpdate() {
  // Create lightbox overlay if it doesn't exist
  let overlay = document.querySelector('.lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close">×</span><img src="" alt="Expanded view" />';
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        overlay.classList.remove('active');
      }
    });
  }

  // Add click handlers to repair step images
  const images = document.querySelectorAll('.repair-step-media img');
  images.forEach((img) => {
    img.addEventListener('click', () => {
      const overlayImg = overlay.querySelector('img');
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add('active');
    });
  });
}
