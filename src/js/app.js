// import './apps/1.js';
// import './apps/2.js';
import App3 from './apps/app3.js';
import App4 from './apps/app4.js';
import App5 from './apps/app5.js';

function app() {
  /* App #3 */
  const app3 = new App3('app3');
  app3.init();

  /* App #4 */
  const app4 = new App4('app4');
  app4.init();

  /* App #5 */
  const app5 = new App5('app5');
  app5.init();
}

document.addEventListener('DOMContentLoaded', app);
