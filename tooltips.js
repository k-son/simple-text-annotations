const tooltipBtn = document.querySelector('.tooltip-btn1');

const tooltipWrapper = document.querySelector('.tooltip-wrapper');


tooltipBtn.addEventListener('click', function() {
  tooltipWrapper.classList.toggle('showTooltip');
});