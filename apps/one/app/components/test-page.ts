import Component from '@glimmer/component';
import { sumArgs } from 'tac/util';

interface TestPageArgs {
  a: number;
  b: number;
}

export default class TestPageComponent extends Component<TestPageArgs> {
  get result(): number {
    return sumArgs({ ...this.args, c: 3 });
  }
}
