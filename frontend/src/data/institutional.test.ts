import { describe, it, expect } from 'vitest';
import {
  PRICING_PLANS,
  FREQUENT_QUESTIONS,
  METHODOLOGY_STEPS,
  PORTFOLIO_PROJECTS,
} from './institutional';

describe('PRICING_PLANS', () => {
  it('has unique ids', () => {
    const ids = PRICING_PLANS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every plan has required fields and at least one feature', () => {
    for (const plan of PRICING_PLANS) {
      for (const field of ['name', 'price', 'period', 'description', 'ctaText', 'ctaHref'] as const) {
        expect(plan[field].trim()).not.toBe('');
      }
      expect(plan.features.length).toBeGreaterThan(0);
    }
  });

  it('has exactly one popular plan', () => {
    expect(PRICING_PLANS.filter((p) => p.isPopular).length).toBe(1);
  });
});

describe('FREQUENT_QUESTIONS', () => {
  it('has unique ids', () => {
    const ids = FREQUENT_QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses only known categories', () => {
    const allowed = ['general', 'network', 'contracting', 'support'];
    for (const q of FREQUENT_QUESTIONS) {
      expect(allowed).toContain(q.category);
    }
  });

  it('every entry has a question and an answer', () => {
    for (const q of FREQUENT_QUESTIONS) {
      expect(q.question.trim()).not.toBe('');
      expect(q.answer.trim()).not.toBe('');
    }
  });
});

describe('METHODOLOGY_STEPS', () => {
  it('has sequential, unique step numbers', () => {
    const steps = METHODOLOGY_STEPS.map((s) => s.stepNumber);
    expect(new Set(steps).size).toBe(steps.length);
    expect(steps).toEqual(steps.map((_, i) => String(i + 1).padStart(2, '0')));
  });

  it('every step has a title, description and details', () => {
    for (const step of METHODOLOGY_STEPS) {
      expect(step.title.trim()).not.toBe('');
      expect(step.description.trim()).not.toBe('');
      expect(step.details.length).toBeGreaterThan(0);
    }
  });
});

describe('PORTFOLIO_PROJECTS', () => {
  it('has unique ids', () => {
    const ids = PORTFOLIO_PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every project has core fields, results and tags', () => {
    for (const project of PORTFOLIO_PROJECTS) {
      for (const field of ['title', 'client', 'ecosystem', 'category', 'summary', 'image'] as const) {
        expect(project[field].trim()).not.toBe('');
      }
      expect(project.results.length).toBeGreaterThan(0);
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });
});
