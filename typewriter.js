class TypeWriter {
    constructor(element, blinker, text, blinkerRate = 2, writingSpeed = 50, blinkingSpeed = 350) {
        // element: The element you want to animate.
        // blinker: The blinker you want to blink.
        // text: The text to write and delete. must be string or array.
        // blinkerRate: Number of times for the blinker to animate.
        // writingSpeed: Speed of every character writing.
        // blinkingSpeed: Speed for showing and hiding the blinker.
        // writingSpeed, blinkingSpeed show be in milliseconds.
        // blinkerRate should be number of times the blinking done before writing the other sentence.
        this.element = element;
        this.blinker = blinker;
        this.blinkerRate = (blinkerRate * 2);
        this.writingSpeed = writingSpeed;
        this.blinkingSpeed = blinkingSpeed;
        this.text = text;

        this.sentenceDone = 0;
        this.writeDone = 0;
        this.newText = "";
        this.isWriting = true;
        this.isCompleted = true;
    }

    #__Blink(infinite = false) {
        this.blinkDone = 0;
        this.showBlink = false;

        this.blinkerInterval = setInterval(() => {
            if ((this.blinkDone < this.blinkerRate) || (infinite == true)) {
                if (this.showBlink) {
                    document.querySelector(this.blinker).textContent = "|";
                    this.showBlink = false;
                }
                else {
                    document.querySelector(this.blinker).textContent = "";
                    this.showBlink = true;
                }

                this.blinkDone++;
            }
            else {
                clearInterval(this.blinkerInterval);
            }
        }, this.blinkingSpeed);
    }

    #__DeleteArrayAnimation() {
        this.deleteInterval = setInterval(() => {
            if (this.writeDone > 0) {
                let element = document.querySelector(this.element);
                element.textContent = element.textContent.substring(0, element.textContent.length - 1)
                this.writeDone--;
            }
            else {
                this.isWriting = true;
                this.writeDone = 0;
                this.isCompleted = true;
                clearInterval(this.deleteInterval);
                this.#__BlinkArray(true);
            }
        }, this.writingSpeed);
    }

    #__BlinkArray(write) {
        this.blinkDone = 0;
        this.showBlink = false;

        this.blinkerInterval = setInterval(() => {
            document.querySelector(this.blinker).textContent = "|";

            if (this.blinkDone < this.blinkerRate) {
                if (this.showBlink) {
                    document.querySelector(this.blinker).textContent = "|";
                    this.showBlink = false;
                }
                else {
                    document.querySelector(this.blinker).textContent = "";
                    this.showBlink = true;
                }

                this.blinkDone++;
            }
            else {
                clearInterval(this.blinkerInterval);
                if (write) {
                    this.#__WriteArrayAnimation();
                }
                else {
                    this.#__DeleteArrayAnimation();
                }
            }
        }, this.blinkingSpeed);
    }

    #__WriteArrayAnimation() {
        document.querySelector(this.blinker).textContent = "|";

        if (this.isCompleted) {
            if (!(this.sentanceDone < this.text.length)) {
                this.sentanceDone = 0;
            }

            this.newText = this.text[this.sentanceDone];
            this.sentanceDone++;
            this.isCompleted = false;
        }

        this.writeInterval = setInterval(() => {
            if (this.writeDone < this.newText.length) {
                document.querySelector(this.element).textContent += this.newText[this.writeDone];
                this.writeDone++;
            }
            else {
                this.isWriting = false;
                this.writeDone = this.newText.length;
                clearInterval(this.writeInterval);
                this.#__BlinkArray(false);
            }
        }, this.writingSpeed);
    }

    StartAnimation() {
        if (Array.isArray(this.text)) {

            document.querySelector(this.element).textContent = "";
            this.#__WriteArrayAnimation();
        }
        else {
            this.writeDone = 0;
            document.querySelector(this.element).textContent = "";
            document.querySelector(this.blinker).textContent = "|";

            this.typeWriterInterval = setInterval(() => {
                if (this.writeDone < this.text.length) {
                    document.querySelector(this.element).textContent += this.text[this.writeDone];
                    this.writeDone++;
                }
                else {
                    clearInterval(this.typeWriterInterval);
                    document.querySelector(this.blinker).textContent = "";
                    if (this.blinkerRate != 0)
                    {
                        this.#__Blink(true);
                    }
                    else
                    {
                        this.#__Blink();
                    }
                }
            }, this.writingSpeed);
        }
    }
}
