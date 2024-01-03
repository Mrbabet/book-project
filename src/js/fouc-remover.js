import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

let domReady = cb => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  document.body.style.visibility = 'visible';
});
