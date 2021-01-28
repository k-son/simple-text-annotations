const tooltipBtn = document.querySelectorAll('.tooltip-btn');
const tooltipWrapper = document.querySelector('.tooltip-wrapper');
const tooltipCloseBtn = document.querySelector('.tooltip-close-btn');
const tooltipParagraph = document.querySelector('.tooltip-text');

/* tooltip texts */
const tooltipTexts = {
  text01: "First text",
  text02: "Second example",
  text03: "Just another simple text",
  text04: "Ok, last example"
}

/* .tooltip-btn events */
tooltipBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const opener = tooltipWrapper.dataset.opener;
    const suffix = this.id.slice(-2);
    const textNum = `text${suffix}`; 
    const text = tooltipTexts[textNum];

    if (opener === 'none') {
      tooltipParagraph.textContent = text;
      this.setAttribute('aria-describedby', 'tooltip-text');
      tooltipWrapper.dataset.opener = this.id;
      tooltipWrapper.classList.add('showTooltip');

    } else if (opener === this.getAttribute('id')) {
      tooltipWrapper.classList.remove('showTooltip');
      setTimeout(() => {
        tooltipParagraph.textContent = '';
      }, 300);
      tooltipWrapper.dataset.opener = 'none';
      this.setAttribute('aria-describedby', '');
      
    } else if ((opener !== tooltipWrapper.getAttribute('id') && (opener !== 'none'))) {
      tooltipParagraph.textContent = text;
      tooltipWrapper.dataset.opener = this.id;
      tooltipBtn.forEach(btn => btn.setAttribute('aria-describedby', ''));
      this.setAttribute('aria-describedby', 'tooltip-text');
    }
  })
})

/* .tooltip-close-btn events */
tooltipCloseBtn.addEventListener('click', function() {
  tooltipWrapper.classList.remove('showTooltip');
  setTimeout(() => {
    tooltipParagraph.textContent = '';
  }, 300);
  tooltipWrapper.dataset.opener = 'none';
  tooltipBtn.forEach(btn => btn.setAttribute('aria-describedby', ''));
});