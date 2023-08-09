import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CityService } from 'src/app/services/common/models/city.service';
import * as $ from "jquery";


@Directive({
  selector: '[appDeletecity]'
})
export class DeletecityDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private cityService: CityService,
    private toastr:ToastrService
  ) {
    const img = _renderer.createElement('img');
    img.setAttribute('src', '../../../../assets/delete.png');
    img.setAttribute('style', 'cursor: pointer;');
    img.width = 30;
    img.height = 30;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  async onclick(): Promise<void> {
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.cityService.delete(this.id)
    $(td.parentElement).fadeOut(500, () => {
      this.callback.emit()
    });
    this.toastr.success("Silindi")
  }
}
