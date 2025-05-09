import { Component, Input } from '@angular/core';
import { DataService } from 'app/services';

import {
  FactorioIcon,
  FactorioIconIds,
} from '../factorio-icon/factorio-icon.model';

@Component({
  selector: 'app-icon-ratio-composite',
  templateUrl: './icon-ratio-composite.component.html',
})
export class IconRatioCompositeComponent {
  @Input()
  public set machineIconId(machineIconId: FactorioIconIds | string) {
    this.machineIcon = this.dataService.getFactorioIcon(machineIconId);
  }
  @Input()
  public set productIconId(productIconId: FactorioIconIds | string) {
    this.productIcon = this.dataService.getFactorioIcon(productIconId);
  }
  @Input()
  public count?: number | string = 0;
  @Input()
  public rateSeconds?: number;

  public machineIcon: FactorioIcon = new FactorioIcon('');
  public productIcon?: FactorioIcon;

  constructor(private dataService: DataService) {
    this.machineIconId = FactorioIconIds.Assembling_machine_3;
  }
}
