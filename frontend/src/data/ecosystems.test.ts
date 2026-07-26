import { describe, it, expect } from 'vitest';
import { NORTECH_ECOSYSTEMS } from './ecosystems';
import type { EcosystemCategory } from '@/types';

const VALID_CATEGORIES: EcosystemCategory[] = [
  'infra-cloud',
  'ai-data',
  'industry-agro',
  'specialized-solutions',
];

describe('NORTECH_ECOSYSTEMS', () => {
  it('contains the advertised 17 ecosystems', () => {
    expect(NORTECH_ECOSYSTEMS).toHaveLength(17);
  });

  it('has unique ids', () => {
    const ids = NORTECH_ECOSYSTEMS.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every ecosystem uses a valid category', () => {
    for (const eco of NORTECH_ECOSYSTEMS) {
      expect(VALID_CATEGORIES).toContain(eco.category);
    }
  });

  it('every ecosystem has required non-empty string fields', () => {
    for (const eco of NORTECH_ECOSYSTEMS) {
      for (const field of ['name', 'categoryName', 'shortDescription', 'fullDescription', 'iconName', 'tagline'] as const) {
        expect(typeof eco[field]).toBe('string');
        expect(eco[field].trim()).not.toBe('');
      }
    }
  });

  it('every href is an internal route', () => {
    for (const eco of NORTECH_ECOSYSTEMS) {
      expect(eco.href.startsWith('/')).toBe(true);
    }
  });

  it('every ecosystem lists at least one feature', () => {
    for (const eco of NORTECH_ECOSYSTEMS) {
      expect(eco.features.length).toBeGreaterThan(0);
      expect(eco.features.every((f) => f.trim() !== '')).toBe(true);
    }
  });

  it('metrics, when present, always have a label and value', () => {
    for (const eco of NORTECH_ECOSYSTEMS) {
      for (const metric of eco.metrics ?? []) {
        expect(metric.label.trim()).not.toBe('');
        expect(metric.value.trim()).not.toBe('');
      }
    }
  });

  it('has at least one featured ecosystem', () => {
    expect(NORTECH_ECOSYSTEMS.some((e) => e.isFeatured)).toBe(true);
  });
});
