import { describe, it, expect, vi, beforeEach } from 'vitest';

const reportError = vi.fn();
const logWarning = vi.fn();

vi.mock('./logger', () => ({
  reportError: (...args: unknown[]) => reportError(...args),
  logWarning: (...args: unknown[]) => logWarning(...args),
}));

import { appendPaymentHistory, readPaymentHistory, PaymentHistoryEntry } from './paymentHistory';

const entry: PaymentHistoryEntry = {
  id: 1,
  data: '01/01/2026',
  hora: '10:00',
  metodo: 'pix',
  valor: 49.99,
  plano: 'Premium',
  status: 'Concluído',
};

describe('paymentHistory', () => {
  beforeEach(() => {
    localStorage.clear();
    reportError.mockClear();
    logWarning.mockClear();
  });

  it('returns an empty history when nothing is stored', () => {
    expect(readPaymentHistory()).toEqual([]);
  });

  it('prepends new entries', () => {
    appendPaymentHistory(entry);
    appendPaymentHistory({ ...entry, id: 2 });

    expect(readPaymentHistory().map((e) => e.id)).toEqual([2, 1]);
  });

  it('reports corrupted history instead of throwing', () => {
    localStorage.setItem('historicoPagamentos', '{invalid');

    expect(readPaymentHistory()).toEqual([]);
    expect(reportError).toHaveBeenCalled();
  });

  it('warns when the stored history is not an array', () => {
    localStorage.setItem('historicoPagamentos', '{"a":1}');

    expect(readPaymentHistory()).toEqual([]);
    expect(logWarning).toHaveBeenCalled();
  });

  it('reports write failures and returns false', () => {
    const spy = vi.spyOn(localStorage, 'setItem').mockImplementation(() => {
      throw new Error('quota exceeded');
    });

    expect(appendPaymentHistory(entry)).toBe(false);
    expect(reportError).toHaveBeenCalled();

    spy.mockRestore();
  });
});
