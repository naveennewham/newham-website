/**
 * Vue directive for scroll-based animations
 * Usage: v-scroll-animation="'fade-up'"
 * Available animations: fade-up, fade-down, fade-left, fade-right, zoom-in
 */

export default {
  mounted(el, binding) {
    // Default animation type
    const animationType = binding.value || 'fade-up';
    const delay = binding.modifiers.delay ? 300 : 0;
    const threshold = binding.modifiers.threshold ? 0.5 : 0.1;
    
    // Add initial classes based on animation type
    switch (animationType) {
      case 'fade-up':
        el.classList.add('opacity-0', 'translate-y-8');
        break;
      case 'fade-down':
        el.classList.add('opacity-0', '-translate-y-8');
        break;
      case 'fade-left':
        el.classList.add('opacity-0', 'translate-x-8');
        break;
      case 'fade-right':
        el.classList.add('opacity-0', '-translate-x-8');
        break;
      case 'zoom-in':
        el.classList.add('opacity-0', 'scale-95');
        break;
      default:
        el.classList.add('opacity-0');
    }
    
    // Add transition classes
    el.classList.add('transition-all', 'duration-700', 'ease-out');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add delay if specified
          if (delay) {
            setTimeout(() => {
              animateElement(el, animationType);
            }, delay);
          } else {
            animateElement(el, animationType);
          }
          
          // Unobserve after animation
          observer.unobserve(el);
        }
      });
    }, {
      threshold: threshold,
      rootMargin: '0px'
    });
    
    // Start observing the element
    observer.observe(el);
    
    // Store observer in element to clean up later
    el._scrollAnimation = observer;
  },
  
  unmounted(el) {
    // Clean up observer when element is unmounted
    if (el._scrollAnimation) {
      el._scrollAnimation.disconnect();
    }
  }
};

// Helper function to animate element based on type
function animateElement(el, animationType) {
  switch (animationType) {
    case 'fade-up':
      el.classList.remove('opacity-0', 'translate-y-8');
      el.classList.add('opacity-100', 'translate-y-0');
      break;
    case 'fade-down':
      el.classList.remove('opacity-0', '-translate-y-8');
      el.classList.add('opacity-100', 'translate-y-0');
      break;
    case 'fade-left':
      el.classList.remove('opacity-0', 'translate-x-8');
      el.classList.add('opacity-100', 'translate-x-0');
      break;
    case 'fade-right':
      el.classList.remove('opacity-0', '-translate-x-8');
      el.classList.add('opacity-100', 'translate-x-0');
      break;
    case 'zoom-in':
      el.classList.remove('opacity-0', 'scale-95');
      el.classList.add('opacity-100', 'scale-100');
      break;
    default:
      el.classList.remove('opacity-0');
      el.classList.add('opacity-100');
  }
}
