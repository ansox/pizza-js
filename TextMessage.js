class TextMessage {
  constructor({text, onComplete}) {
    this.text = text;
    this.onComplete = onComplete;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('TextMessage');

    this.element.innerHTML = (`
      <p class="TextMessage_p"></p>
      <button class="TextMessage_button">Next</button>
    `)

    this.reavealingText = new RevealingText({
      text: this.text,
      element: this.element.querySelector('.TextMessage_p'),
    })


    this.element.querySelector('button').addEventListener('click', () => this.done());

    this.actionListener = new KeyPressListener('Enter', () => {
      this.done();
    })
  }

  done() {
    if (!this.reavealingText.isDone) {
      this.reavealingText.warpToDone();
      return;
    }

    this.element.remove();
    this.actionListener.unbind();
    this.onComplete();
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);
    this.reavealingText.init();
    
  }
}