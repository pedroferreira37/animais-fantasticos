export default function clickOutSide(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  function handleOutSide(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutSide);
      });
      callback();
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { html.addEventListener(userEvent, handleOutSide); });
    });
    element.setAttribute(outside, '');
  }
}
