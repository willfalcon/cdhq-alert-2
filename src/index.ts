import Cookies from 'js-cookie';
import {attachListener} from './listener';

function initAlert() {

  const alertWrapper = document.querySelector('#cdhq-alert') as HTMLElement;
  const alert = alertWrapper.querySelector('.alert__inner') as HTMLElement;
  const delay = alertWrapper.dataset.delay ? parseInt(alertWrapper.dataset.delay) : 0;
  const cookieId = alertWrapper.dataset.cookie

  const cookie = Cookies.get(cookieId);
  if (cookie === 'true') return;

  setTimeout(() => {
    alert.classList.remove('-translate-y-full'); 
    attachListener(alertWrapper, cookieId);
  }, delay * 1000);

} 
 
initAlert();  
 
