import { logWarning, reportError } from './logger';

const STORAGE_KEY = 'historicoPagamentos';

export interface PaymentHistoryEntry {
  id: number;
  data: string;
  hora: string;
  metodo: string;
  valor: number;
  plano: string;
  status: string;
}

/**
 * Reads the locally stored payment history. Corrupted or unavailable storage is
 * reported instead of crashing the caller, returning an empty history.
 */
export function readPaymentHistory(): PaymentHistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      logWarning('Histórico de pagamentos inválido no localStorage', {
        component: 'paymentHistory',
        action: 'readPaymentHistory',
      });
      return [];
    }
    return parsed as PaymentHistoryEntry[];
  } catch (error) {
    reportError(error, { component: 'paymentHistory', action: 'readPaymentHistory' });
    return [];
  }
}

/**
 * Prepends an entry to the locally stored payment history.
 * Returns false when the write failed (e.g. storage disabled or full).
 */
export function appendPaymentHistory(entry: PaymentHistoryEntry): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...readPaymentHistory()]));
    return true;
  } catch (error) {
    reportError(error, { component: 'paymentHistory', action: 'appendPaymentHistory' });
    return false;
  }
}
