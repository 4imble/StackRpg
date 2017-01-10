import { bindable } from 'aurelia-framework';

export class ProgressBar {
    @bindable percent: number;

    get height(): number {
        return 100 - this.percent;
    }
}