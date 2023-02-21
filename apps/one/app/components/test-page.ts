import Component from '@glimmer/component';

interface TestPageArgs {
  a: number;
  b: number;
}

export default class TestPageComponent extends Component<TestPageArgs> {
  get result(): number {
    return this.args.a + this.args.b;
  }
}
