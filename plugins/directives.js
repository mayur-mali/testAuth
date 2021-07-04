import Vue from 'vue';

Vue.directive('click-outside', {
  bind (el, binding) {
    // Define ourClickEventHandler
    const ourClickEventHandler = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        // as we are attaching an click event listener to the document (below)
        // ensure the events target is outside the element or a child of it
        binding.value(event); // before binding it
      }
    };
    // attached the handler to the element so we can remove it later easily
    el.__vueClickEventHandler__ = ourClickEventHandler;
    // attaching ourClickEventHandler to a listener on the document here
    document.addEventListener('click', ourClickEventHandler);
  },
  unbind (el) {
    // Remove Event Listener
    document.removeEventListener('click', el.__vueClickEventHandler__);
  },
});

Vue.directive('lazy', {
  inserted: (el) => {
    function loadImage () {
      if (el.nodeName !== 'IMG') {
        // eslint-disable-next-line no-console
        console.warn('v-lazy used in non img element. It must be used on img only!!');
        return;
      }

      if (el) {
        // @note adds "loaded" class when image is loaded in the dom
        el.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100);
        });

        // @note logs error while image is not loaded
        // eslint-disable-next-line no-console
        el.addEventListener('error', () => console.warn('Error occurred while loading image, Check image data-src!!'));
        el.src = el.dataset.src;
      }
    }

    function handleIntersect (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          // @note remove observer when image is loaded
          observer.unobserve(el);
        }
      });
    }

    function createObserver () {
      const options = {
        root: null,
        threshold: '0', // 0 for as soon as one pixel of the img is in view port
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window.IntersectionObserver) {
      createObserver();
    } else {
      loadImage();
    }
  },
});
