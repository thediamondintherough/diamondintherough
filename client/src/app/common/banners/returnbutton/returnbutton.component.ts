import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'return-button',
  templateUrl: './returnbutton.component.html'
})
export class ReturnButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // When the user scrolls down 20px from the top of the document, show the button
  @HostListener('window: scroll', ['$event'])
  scroll($event) { 
    this.scrollFunction();
  };

  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("scrollup").style.display = "block";      
    } else {
      document.getElementById("scrollup").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
