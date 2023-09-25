import * as tf from '@tensorflow/tfjs-node';


describe('foo', () => {
  it('foos', () => {
    const t = tf.ones([1]);
    expect(t.shape).toEqual([1]);
    t.dispose();
  });
});
