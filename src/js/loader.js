import { Loading } from 'notiflix/build/notiflix-loading-aio';

showLoadingIndicator();

window.onload = function () {
  Loading.remove();
};

export function showLoadingIndicator() {
  Loading.pulse({
    clickToClose: true,
    svgSize: '100px',
    backgroundColor: 'rgba(17, 17, 17, 0.3)',
    svgColor: '#4f2ee8',
  });
}
export function removeLoader() {
  window.onload = function () {
    Loading.remove();
  };
}
