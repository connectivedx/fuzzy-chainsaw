import Statum from 'statum';
import throttle from 'raf-throttle';


// reasonable predicates
export const isMediumSmallBreakpoint = (width) => width > 640;


export const windowWidth = new Statum(() => window.innerWidth);

window.addEventListener('resize', throttle(() => {
  windowWidth.refresh();
}));


export default windowWidth;
