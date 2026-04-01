/**
 * Page and element transition utilities
 * Provides reusable transition effects for Vue components
 */

// Fade transition
export const fadeTransition = {
  enterActiveClass: 'transition-opacity duration-300 ease-out',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveActiveClass: 'transition-opacity duration-200 ease-in',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0'
};

// Slide fade transition
export const slideFadeTransition = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 transform translate-y-4',
  enterToClass: 'opacity-100 transform translate-y-0',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 transform translate-y-0',
  leaveToClass: 'opacity-0 transform translate-y-4'
};

// Scale fade transition
export const scaleFadeTransition = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 transform scale-95',
  enterToClass: 'opacity-100 transform scale-100',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 transform scale-100',
  leaveToClass: 'opacity-0 transform scale-95'
};

// Slide horizontal transition
export const slideHorizontalTransition = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 transform translate-x-8',
  enterToClass: 'opacity-100 transform translate-x-0',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 transform translate-x-0',
  leaveToClass: 'opacity-0 transform translate-x-8'
};

// Page transition (for route changes)
export const pageTransition = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 transform translate-y-4',
  enterToClass: 'opacity-100 transform translate-y-0',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 transform translate-y-0',
  leaveToClass: 'opacity-0 transform -translate-y-4'
};

/**
 * Creates a staggered animation for lists of items
 * @param {Number} baseDelay - Base delay in ms
 * @param {Number} increment - Delay increment per item in ms
 * @param {Number} index - Current item index
 * @returns {Object} - Style object with transition delay
 */
export const staggeredDelay = (baseDelay = 0, increment = 100, index = 0) => {
  return {
    transitionDelay: `${baseDelay + (index * increment)}ms`
  };
};

/**
 * Scroll animation utility for use with Intersection Observer
 * @param {Element} element - DOM element to observe
 * @param {Object} options - Intersection Observer options
 * @param {Function} callback - Callback when element is in view
 */
export const createScrollAnimation = (element, options = {}, callback) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);
  
  observer.observe(element);
  
  return observer;
};

// Animation classes for scroll animations
export const scrollAnimationClasses = {
  fadeIn: 'transition-opacity duration-700 ease-out',
  slideUp: 'transition-all duration-700 ease-out transform',
  slideLeft: 'transition-all duration-700 ease-out transform',
  slideRight: 'transition-all duration-700 ease-out transform',
  zoomIn: 'transition-all duration-700 ease-out transform'
};
