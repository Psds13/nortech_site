'use client';

interface PasswordStrengthProps {
  password?: string;
}

export function PasswordStrength({ password = '' }: PasswordStrengthProps) {
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^a-zA-Z0-9]/.test(pass)) score++;
    return score;
  };

  const score = getStrength(password);
  const labels = ['Muito Fraca', 'Fraca', 'Média', 'Forte', 'Excelente'];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500', 'bg-cyan'];

  return (
    <div className="space-y-1.5 pt-2">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
        <span>Força da senha</span>
        <span>{labels[score] || 'Fraca'}</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`h-1.5 rounded-full transition-colors ${
              step <= score ? colors[score] : 'bg-slate-700/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
