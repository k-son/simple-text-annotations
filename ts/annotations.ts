{
  /* variables */
  const annotationBtn = document.querySelectorAll('.annotation-btn') as NodeListOf <HTMLButtonElement>;
  const annotationWrapper = document.querySelector('.annotation-wrapper') as HTMLDivElement;
  const annotationCloseBtn = document.querySelector('.annotation-close-btn') as HTMLButtonElement;
  const annotationParagraph = document.querySelector('.annotation-text') as HTMLParagraphElement;
  
  /* put here your annotations texts */
  const annotationTexts: {
    text1: string,
    text2: string,
    text3: string,
    text4: string
  } = {
    text1: "First text example.",
    text2: "Second example with line break. </br>Annotation launched by Button nr 2 and Button nr 3.",
    text3: "<ul style='list-style-type: none;'><li>First list item.</li><li>Second list item.</li><li>Third list item.</li>",
    text4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam atque amet dolorum esse. Totam quis doloremque quae rerum corporis, beatae eum asperiores officiis consequuntur. Aliquam, tenetur dolorum eius eveniet nesciunt quos, nam, quisquam porro harum iste esse quod maiores! Molestiae ea atque facilis aperiam ratione impedit adipisci, necessitatibus recusandae. Vel ut temporibus alias sequi harum commodi reprehenderit, voluptate pariatur itaque omnis vero? Accusantium quia consequuntur nobis maxime adipisci reiciendis minima vel rerum quam architecto dolore saepe eveniet, non hic obcaecati iure animi quo esse vero. Perferendis, quibusdam minus?"
  };
  
  /* .annotation-btn events */
  if (annotationBtn.length > 0) {
    annotationBtn.forEach(function(button: HTMLButtonElement): void {
      button.addEventListener<'click'>('click', function(): void {
    
        const prop: string | undefined = this.dataset.text;
    
        if (prop) {
          const text: string = Object(annotationTexts)[prop];
    
          if (text !== undefined) {
            // opener indicates which button has launched the annotation
            const opener: string | undefined = annotationWrapper.dataset.opener;

            if (opener === 'none') {
              annotationParagraph.innerHTML = text;
              this.setAttribute('aria-describedby', 'annotation-text');
              annotationWrapper.dataset.opener = this.id;
              annotationWrapper.classList.add('show-annotation');
              this.classList.add('annotation-btn--active');
      
            } else if (opener === this.getAttribute('id')) {
              annotationWrapper.classList.remove('show-annotation');
              setTimeout(function(): void {
                annotationParagraph.innerHTML = '';
              }, 300);
              this.setAttribute('aria-describedby', '');
              annotationWrapper.dataset.opener = 'none';
              this.classList.remove('annotation-btn--active');
      
            } else if ((opener !== annotationWrapper.getAttribute('id') && (opener !== 'none'))) {
              annotationParagraph.innerHTML = text;
              annotationBtn.forEach(function(btn: HTMLButtonElement): void {btn.setAttribute('aria-describedby', '')});
              this.setAttribute('aria-describedby', 'annotation-text');
              annotationWrapper.dataset.opener = this.id;
              annotationBtn.forEach(function(btn: HTMLButtonElement): void {btn.classList.remove('annotation-btn--active')});
              this.classList.add('annotation-btn--active');
            }

          } else {
            throw new Error(`annotationTexts property ${prop} is undefined.`)
          }
        } else {
          throw new Error(`Data-text attribute is undefined.`);
        }
      })
    })
  }
  
  /* .annotation-close-btn events */
  annotationCloseBtn.addEventListener<'click'>('click', function(): void {
    annotationWrapper.classList.remove('show-annotation');
    setTimeout(function(): void {
      annotationParagraph.innerHTML = '';
    }, 300);
    annotationBtn.forEach(function(btn: HTMLButtonElement): void {btn.setAttribute('aria-describedby', '')});
    annotationWrapper.dataset.opener = 'none';
    annotationBtn.forEach(function(btn: HTMLButtonElement): void {btn.classList.remove('annotation-btn--active')});
  });
}