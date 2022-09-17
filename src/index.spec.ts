import { ping } from '.';
import { expect } from 'chai';
import 'mocha';

describe('It is alive', () => {
  it('get greeting', () => {
    const result = ping();
    expect(result).to.equal('Hello TypeScript and Node');
  });
});