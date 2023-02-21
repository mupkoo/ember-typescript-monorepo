import Component from '@glimmer/component';
import { sum } from 'tac/util';

export interface TacArgs {
  a: number;
  b: number;
}

export default class TacComponent extends Component<TacArgs> {
  get sum(): number {
    return sum(this.args.a, this.args.b);
  }
}
