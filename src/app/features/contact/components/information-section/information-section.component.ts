import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-information-section',
  imports: [],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.css'
})
export class InformationSectionComponent implements OnInit {
  private typedText = "Conectamos Esperanzas, Transformamos Vidas";

  ngOnInit() {
    this.initTypeWriter();
  }

  private initTypeWriter() {
    const titleElement = document.querySelector('.section-title') as HTMLElement;
    const textElement = document.createElement('span');
    textElement.classList.add('typed-text');

    const cursorElement = document.createElement('span');
    cursorElement.classList.add('cursor');
    cursorElement.textContent = '|';

    titleElement.innerHTML = '';
    titleElement.appendChild(textElement);
    titleElement.appendChild(cursorElement);

    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex < this.typedText.length) {
        textElement.textContent += this.typedText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        cursorElement.style.animation = 'none';
      }
    };

    typeWriter();
  }

}
