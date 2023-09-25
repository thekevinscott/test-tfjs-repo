import { describe, it, expect } from 'vitest';
import * as tf from '@tensorflow/tfjs-node';

describe('bar', () => {
  it('bars', () => {
    const t = tf.ones([1]);
    expect(t.shape).toEqual([1]);
    t.dispose();
  });
});

