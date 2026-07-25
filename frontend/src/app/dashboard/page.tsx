'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Receipt, 
  Settings, 
  Network, 
  Headset,
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'finance' | 'support' | 'settings'>('overview');

  const metrics = [
    { label: 'Projetos Ativos', value: '4 Projetos', status: 'Em Dia' },
    { label: 'Uptime Redes (NOC)', value: '99.99%', status: 'Normal' },
    { label: 'Faturas em Aberto', value: 'R$ 0,00', status: 'Quitado' },
    { label: 'Chamados Suporte (SLA)', value: '0 Abertos', status: 'SLA < 15m' }
  ];

  const recentTickets = [
    { id: '#INC-8942', subject: 'Upgrade de BANDA Wi-Fi Bloco B', status: 'Concluído', date: 'Hoje, 14:20' },
    { id: '#INC-8910', subject: 'Certificação de Ponto Fluke Rack 02', status: 'Em Atendimento', date: 'Ontem, 09:15' }
  ];

  return (
    <div className="w-full bg-background min-h-screen flex flex-col lg:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-slate-900 text-white border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan">Portal do Cliente & Admin</span>
            <h2 className="text-xl font-extrabold text-white mt-1">Nortech Dashboard</h2>
          </div>

          <nav className="space-y-1 text-xs font-bold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                activeTab === 'overview' ? 'bg-cyan text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Visão Geral</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                activeTab === 'projects' ? 'bg-cyan text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Meus Projetos</span>
            </button>

            <button
              onClick={() => setActiveTab('finance')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                activeTab === 'finance' ? 'bg-cyan text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Gestão Financeira</span>
            </button>

            <button
              onClick={() => setActiveTab('support')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                activeTab === 'support' ? 'bg-cyan text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Headset className="w-4 h-4" />
              <span>Suporte & NOC 24/7</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                activeTab === 'settings' ? 'bg-cyan text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Configurações</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan/20 text-cyan font-extrabold flex items-center justify-center text-xs">
              NT
            </div>
            <div>
              <p className="text-xs font-bold text-white">Empresa Demo Ltda</p>
              <p className="text-[10px] text-slate-400">Plano Corporate Enterprise</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Painel de Controle Corporativo
            </h1>
            <p className="text-xs text-slate-500">
              Gestão de contratos, status da rede Nortech Network e chamados NOC.
            </p>
          </div>

          <Link
            href="/nortech-network"
            className="bg-cyan text-black px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-cyan/90 transition-all"
          >
            <Network className="w-4 h-4" />
            <span>Abrir Chamado Técnico NOC</span>
          </Link>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-card-bg border border-slate-200 dark:border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-[11px] font-semibold text-slate-500 uppercase">{m.label}</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{m.value}</p>
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">
                {m.status}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Tickets Table */}
        <div className="bg-card-bg border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Chamados Recentes (NOC & TI)</h3>
            <span className="text-xs text-cyan font-bold">Ver todos →</span>
          </div>

          <div className="space-y-3">
            {recentTickets.map((t) => (
              <div key={t.id} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/40 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan font-bold">{t.id}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{t.subject}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-slate-400">{t.date}</span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan/10 text-cyan font-bold text-[10px]">
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
}
