import { describe, it, expect } from 'vitest';
import { NETWORK_SERVICES, NETWORK_METRICS, SLA_LEVELS } from './network';

describe('NETWORK_SERVICES', () => {
  it('has unique ids', () => {
    const ids = NETWORK_SERVICES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every service has required fields, deliverables and specs', () => {
    for (const service of NETWORK_SERVICES) {
      for (const field of ['title', 'description', 'icon'] as const) {
        expect(service[field].trim()).not.toBe('');
      }
      expect(service.deliverables.length).toBeGreaterThan(0);
      expect(service.specs.length).toBeGreaterThan(0);
    }
  });

  it('every spec has a label and a detail', () => {
    for (const service of NETWORK_SERVICES) {
      for (const spec of service.specs) {
        expect(spec.label.trim()).not.toBe('');
        expect(spec.detail.trim()).not.toBe('');
      }
    }
  });
});

describe('NETWORK_METRICS', () => {
  it('is a non-empty list of value/label pairs', () => {
    expect(NETWORK_METRICS.length).toBeGreaterThan(0);
    for (const metric of NETWORK_METRICS) {
      expect(metric.value.trim()).not.toBe('');
      expect(metric.label.trim()).not.toBe('');
    }
  });
});

describe('SLA_LEVELS', () => {
  it('has unique names', () => {
    const names = SLA_LEVELS.map((l) => l.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('every level has an sla, coverage and features', () => {
    for (const level of SLA_LEVELS) {
      expect(level.sla.trim()).not.toBe('');
      expect(level.coverage.trim()).not.toBe('');
      expect(level.features.length).toBeGreaterThan(0);
    }
  });

  it('has at most one popular level', () => {
    const popular = SLA_LEVELS.filter((l) => 'isPopular' in l && l.isPopular);
    expect(popular.length).toBeLessThanOrEqual(1);
  });
});
