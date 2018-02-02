import Statum from 'statum';
import throttle from 'raf-throttle';


const scrollPosition = new Statum(() => window.scrollY);

window.addEventListener('scroll', throttle(() => {
  scrollPosition.refresh();
}));

export default scrollPosition;
