// dragging.js
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const startDragging = (e, element) => {
  isDragging = true;
  startX = e.pageX - element.offsetLeft;
  scrollLeft = element.scrollLeft;
  element.style.cursor = 'grabbing';
  element.style.userSelect = 'none'; // Предотвращает выделение текста при перетаскивании
};

const stopDragging = (element) => {
  isDragging = false;
  element.style.cursor = '';
  element.style.userSelect = ''; // Возвращает стандартное поведение выделения текста
};

const handleDragging = (e, element) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - element.offsetLeft;
  const walk = (x - startX) * 2; // Коэффициент ускорения может быть адаптирован
  element.scrollLeft = scrollLeft - walk;
};

const handleWheelEvent = (event) => {
  if (!extraBarInner.value) return;
  const { deltaX, deltaY } = event;
  extraBarInner.value.scrollLeft += deltaY + deltaX;
  event.preventDefault(); // Предотвратить стандартное поведение прокрутки
};

export { startDragging, stopDragging, handleDragging, handleWheelEvent};