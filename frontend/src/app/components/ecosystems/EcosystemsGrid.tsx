'use client';
import { useState } from 'react';
import { NORTECH_ECOSYSTEMS, NORTECH_CATEGORIES } from '@/data/ecosystems';
import EcosystemCard from './EcosystemCard';
import { Search } from 'lucide-react';

export default function EcosystemsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEcosystems = NORTECH_ECOSYSTEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {NORTECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-cyan text-black border-cyan shadow-[0_0_15px_rgba(0,219,255,0.3)]'
                  : 'bg-card-bg/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-cyan/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por unidade ou tecnologia..."
            className="w-full bg-card-bg/60 text-slate-900 dark:text-white text-xs rounded-xl pl-9 pr-4 py-2.5 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan transition-colors"
          />
        </div>
      </div>

      {/* Grid of Ecosystem Cards */}
      {filteredEcosystems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEcosystems.map((eco) => (
            <EcosystemCard key={eco.id} ecosystem={eco} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
          <p className="text-slate-500 text-sm font-medium">Nenhum ecossistema encontrado para o termo pesquisado.</p>
        </div>
      )}
    </section>
  );
}
