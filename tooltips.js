const tooltipBtn = document.querySelectorAll('.tooltip-btn');
const tooltipWrapper = document.querySelector('.tooltip-wrapper');
const tooltipCloseBtn = document.querySelector('.tooltip-close-btn');
const tooltipParagraph = document.querySelector('.tooltip-text');

/* texts for tooltips */
const tooltipTexts = {
  1: "First text example.",
  2: "Second example with line break. </br>Annotation launched by Button nr 2 and Button nr 3.",
  3: "<ul style='list-style-type: none;'><li>First list item.</li><li>Second list item.</li><li>Third list item.</li>",
  4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque amet dolorum esse. Totam quis doloremque quae rerum corporis, beatae eum asperiores officiis consequuntur. Aliquam, tenetur dolorum eius eveniet nesciunt quos, nam, quisquam porro harum iste esse quod maiores! Molestiae ea atque facilis aperiam ratione impedit adipisci, necessitatibus recusandae. Vel ut temporibus alias sequi harum commodi reprehenderit, voluptate pariatur itaque omnis vero? Accusantium quia consequuntur nobis maxime adipisci reiciendis minima vel rerum quam architecto dolore saepe eveniet, non hic obcaecati iure animi quo esse vero. Perferendis, quibusdam minus?"
}

/* .tooltip-btn events */
tooltipBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const num = this.dataset.text;
    const text = tooltipTexts[num];
    /* opener indicates which button launched annotation */
    const opener = tooltipWrapper.dataset.opener;

    if (opener === 'none') {
      tooltipParagraph.innerHTML = text;
      this.setAttribute('aria-describedby', 'tooltip-text');
      tooltipWrapper.dataset.opener = this.id;
      tooltipWrapper.classList.add('showTooltip');

    } else if (opener === this.getAttribute('id')) {
      tooltipWrapper.classList.remove('showTooltip');
      setTimeout(() => {
        tooltipParagraph.innerHTML = '';
      }, 300);
      tooltipWrapper.dataset.opener = 'none';
      this.setAttribute('aria-describedby', '');
      
    } else if ((opener !== tooltipWrapper.getAttribute('id') && (opener !== 'none'))) {
      tooltipParagraph.innerHTML = text;
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
    tooltipParagraph.innerHTML = '';
  }, 300);
  tooltipWrapper.dataset.opener = 'none';
  tooltipBtn.forEach(btn => btn.setAttribute('aria-describedby', ''));
});