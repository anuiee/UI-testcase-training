import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-rounnd-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-rounnd-btn.component.html',
  styleUrl: './bx-rounnd-btn.component.scss'
})
export class BxRounndBtnComponent {
// @Input() btnText ! :string;
// @Input() dynamicStyle!: { [key: string]: string };
// @Input() style  : any;
// checkboxItems = [
//   { label: 'Events', },
//   { label: 'Services',  },
//   { label: 'Careers',  },
//   { label: 'Partner info',  },
//   { label: 'Blogs and other content',}
// ];

@Input() badgeText ! :string;
@Input() dynamicStyle!: { [key: string]: string };
@Input() style  : any;
@Input() formControls! : string;
onBadgeClick():void{
  alert("badge");
  this.style={...this.style,'background-color':'#2D82E5','color':'white'};
}
}
