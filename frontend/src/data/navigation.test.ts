import { describe, it, expect } from 'vitest';
import { MAIN_NAV_ROUTES, FOOTER_NAV_SECTIONS } from './navigation';

describe('MAIN_NAV_ROUTES', () => {
  it('is a non-empty list', () => {
    expect(Array.isArray(MAIN_NAV_ROUTES)).toBe(true);
    expect(MAIN_NAV_ROUTES.length).toBeGreaterThan(0);
  });

  it('every route has a name and an internal href', () => {
    for (const route of MAIN_NAV_ROUTES) {
      expect(route.name.trim()).not.toBe('');
      expect(route.href.startsWith('/')).toBe(true);
    }
  });

  it('has unique names and hrefs', () => {
    const names = MAIN_NAV_ROUTES.map((r) => r.name);
    const hrefs = MAIN_NAV_ROUTES.map((r) => r.href);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it('includes the home route', () => {
    expect(MAIN_NAV_ROUTES.some((r) => r.href === '/')).toBe(true);
  });
});

describe('FOOTER_NAV_SECTIONS', () => {
  it('every section has a title and at least one link', () => {
    expect(FOOTER_NAV_SECTIONS.length).toBeGreaterThan(0);
    for (const section of FOOTER_NAV_SECTIONS) {
      expect(section.title.trim()).not.toBe('');
      expect(section.links.length).toBeGreaterThan(0);
    }
  });

  it('every footer link has a name and a non-empty href', () => {
    for (const section of FOOTER_NAV_SECTIONS) {
      for (const link of section.links) {
        expect(link.name.trim()).not.toBe('');
        expect(link.href.trim()).not.toBe('');
      }
    }
  });

  it('has unique section titles', () => {
    const titles = FOOTER_NAV_SECTIONS.map((s) => s.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
