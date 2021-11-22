import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  suggestions = ['test', 'demo', 'awesome','thanks']
  filteredSuggestion = []
  @ViewChild('suggest')
  ulContainer: ElementRef<any>;
  @ViewChild('editor')
  editorContainer: ElementRef<HTMLDivElement>;
  onInputs(e) {
    
    const ele = this.ulContainer.nativeElement as HTMLElement;
    var r = window.getSelection().getRangeAt(0);
    const text = r.endContainer.textContent
    const rect = r.getBoundingClientRect();
    var relative = (document.body.parentNode as any).getBoundingClientRect();
    ele.style.top = rect.bottom - relative.top + 'px'; //this will place ele below the selection
   setTimeout(()=>{
    ele.style.right = -((rect.right + ele.offsetWidth) - relative.right) + 'px'; //this will align the right edges together
   })

    if(r.endContainer.textContent){
      ele.style.display = 'block'
      this.filteredSuggestion = this.suggestions.slice().filter(s=>s.includes(text))
    }else{
      ele.style.display = 'none'
      this.filteredSuggestion = this.suggestions.slice()
    }
    console.log(r.endContainer.textContent)
    
  }

  onSelect(text){
     const editor =  this.editorContainer.nativeElement;

     editor.innerHTML = editor.innerHTML + '<br/>' + text

     this.ulContainer.nativeElement.style.display = 'none'
  }
}
