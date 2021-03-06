import {expect} from 'chai';
import Fhir from '../lib/fhir';

describe('fhir', () => {
  it('should be able to generate a patient resource', async() => {
    expect(Fhir.createPatientResource('foo', 'bar')).to.have.property('identifier');
  }).timeout(0);
  it('should be able to generate observation resources', async() => {
    expect(Fhir.createBpResource('baz', 200, 60, 60)).to.have.property('subject');
    expect(Fhir.createHrResource('qux', 60, 100, 0.3)).to.have.property('subject');
  }).timeout(0);
});
