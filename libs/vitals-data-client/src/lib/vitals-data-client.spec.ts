import { vitalsDataClient } from './vitals-data-client';

describe('vitalsDataClient', () => {
  it('should work', () => {
    expect(vitalsDataClient()).toEqual('vitals-data-client');
  });
});
