import Cookies from 'js-cookie';

export function attachListener(alertWrapper: HTMLElement, id: string) {
  const alert = alertWrapper.querySelector('.alert__inner') as HTMLElement;
  const closeButton = alertWrapper.querySelector('#close-alert') as HTMLButtonElement;
  closeButton.addEventListener('click', () => {
    alert.addEventListener('transitionend', () => {
      alertWrapper.remove();
    });
    alert.classList.add('-translate-y-full');
    Cookies.set(id, 'true', { expires: 7 });
  });
}