import { FiAlertCircle } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface FormAlertProps {
  message?: string | null;
  className?: string;
}

export default function FormAlert({ message, className }: FormAlertProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        'flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 p-3 rounded-lg mb-6 text-sm animate-pulse',
        className,
      )}
    >
      <FiAlertCircle className="shrink-0" />
      <span>{message}</span>
    </div>
  );
}
