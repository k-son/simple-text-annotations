/* variables */
const annotationBtn = document.querySelectorAll('.annotation-btn');
const annotationWrapper = document.querySelector('.annotation-wrapper');
const annotationCloseBtn = document.querySelector('.annotation-close-btn');
const annotationParagraph = document.querySelector('.annotation-text');

/* put here your annotations texts */
const annotationTexts = {
  1: "First text example.",
  2: "Second example with line break. </br>Annotation launched by Button nr 2 and Button nr 3.",
  3: "<ul style='list-style-type: none;'><li>First list item.</li><li>Second list item.</li><li>Third list item.</li>",
  4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque amet dolorum esse. Totam quis doloremque quae rerum corporis, beatae eum asperiores officiis consequuntur. Aliquam, tenetur dolorum eius eveniet nesciunt quos, nam, quisquam porro harum iste esse quod maiores! Molestiae ea atque facilis aperiam ratione impedit adipisci, necessitatibus recusandae. Vel ut temporibus alias sequi harum commodi reprehenderit, voluptate pariatur itaque omnis vero? Accusantium quia consequuntur nobis maxime adipisci reiciendis minima vel rerum quam architecto dolore saepe eveniet, non hic obcaecati iure animi quo esse vero. Perferendis, quibusdam minus?"
}

/* .annotation-btn events */
annotationBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const num = this.dataset.text;
    const text = annotationTexts[num];
    /* opener indicates which button has launched the annotation */
    const opener = annotationWrapper.dataset.opener;

    if (opener === 'none') {
      annotationParagraph.innerHTML = text;
      this.setAttribute('aria-describedby', 'annotation-text');
      this.classList.add('annotation-btn--active');
      annotationWrapper.dataset.opener = this.id;
      annotationWrapper.classList.add('show-annotation');

    } else if (opener === this.getAttribute('id')) {
      annotationWrapper.classList.remove('show-annotation');
      this.classList.remove('annotation-btn--active');
      setTimeout(() => {
        annotationParagraph.innerHTML = '';
      }, 300);
      annotationWrapper.dataset.opener = 'none';
      this.setAttribute('aria-describedby', '');
      
    } else if ((opener !== annotationWrapper.getAttribute('id') && (opener !== 'none'))) {
      annotationParagraph.innerHTML = text;
      annotationWrapper.dataset.opener = this.id;
      annotationBtn.forEach(btn => btn.classList.remove('annotation-btn--active'));
      this.classList.add('annotation-btn--active');
      annotationBtn.forEach(btn => btn.setAttribute('aria-describedby', ''));
      this.setAttribute('aria-describedby', 'annotation-text');
    }
  })
})

/* .annotation-close-btn events */
annotationCloseBtn.addEventListener('click', function() {
  annotationWrapper.classList.remove('show-annotation');
  setTimeout(() => {
    annotationParagraph.innerHTML = '';
  }, 300);
  annotationWrapper.dataset.opener = 'none';
  annotationBtn.forEach(btn => btn.classList.remove('annotation-btn--active'));
  annotationBtn.forEach(btn => btn.setAttribute('aria-describedby', ''));
});