const tooltipBtn = document.querySelectorAll('.tooltip-btn');
const tooltipWrapper = document.querySelector('.tooltip-wrapper');
const tooltipCloseBtn = document.querySelector('.tooltip-close-btn');
const tooltipParagraph = document.querySelector('.tooltip-text');

/* tooltip texts */
const tooltipTexts = {
  1: "First text",
  2: "Second example. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolor fugiat?",
  3: "Just another simple text",
  4: "Ok, last quite long example. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque amet dolorum esse. Totam quis doloremque quae rerum corporis, beatae eum asperiores officiis consequuntur. Aliquam, tenetur dolorum eius eveniet nesciunt quos, nam, quisquam porro harum iste esse quod maiores! Molestiae ea atque facilis aperiam ratione impedit adipisci, necessitatibus recusandae. Vel ut temporibus alias sequi harum commodi reprehenderit, voluptate pariatur itaque omnis vero? Accusantium quia consequuntur nobis maxime adipisci reiciendis minima vel rerum quam architecto dolore saepe eveniet, non hic obcaecati iure animi quo esse vero. Perferendis, quibusdam minus?"
}

/* .tooltip-btn events */
tooltipBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const suffix = this.id.replace('tooltip-btn-', '');
    const text = tooltipTexts[suffix];
    const opener = tooltipWrapper.dataset.opener;

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