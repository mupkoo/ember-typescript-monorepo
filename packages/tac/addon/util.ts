import { TacArgs } from 'tac/components/tac';

interface SumWithArgs extends TacArgs {
  f: number;
}

export const sum = (a: number, b: number) => a + b;
export const sumArgs = (args: SumWithArgs) => sum(sum(args.a, args.b), args.f);
