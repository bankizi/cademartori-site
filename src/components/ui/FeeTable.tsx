'use client';

import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { FEE_TABLE } from '@/lib/constants';

export function FeeTable() {
  return (
    <ScrollReveal>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border-light">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-brand-blue text-white">
              <th className="px-6 py-4 font-semibold">Serviço</th>
              <th className="px-6 py-4 font-semibold">Fato Gerador</th>
              <th className="px-6 py-4 font-semibold">Valor</th>
              <th className="px-6 py-4 font-semibold">Observação</th>
            </tr>
          </thead>
          <tbody>
            {FEE_TABLE.map((fee, i) => (
              <tr
                key={fee.service}
                className={i % 2 === 0 ? 'bg-white' : 'bg-brand-offwhite/50'}
              >
                <td className="px-6 py-4 font-medium text-text-primary">
                  {fee.service}
                </td>
                <td className="px-6 py-4 text-text-secondary">{fee.trigger}</td>
                <td className="px-6 py-4 font-semibold text-brand-blue">
                  {fee.value}
                </td>
                <td className="px-6 py-4 text-text-muted">{fee.observation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {FEE_TABLE.map((fee) => (
          <div
            key={fee.service}
            className="rounded-xl border border-border-light bg-white p-5"
          >
            <h3 className="font-semibold text-brand-blue">{fee.service}</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Fato Gerador</span>
                <span className="text-text-secondary">{fee.trigger}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Valor</span>
                <span className="font-semibold text-brand-blue">{fee.value}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Observação</span>
                <span className="text-text-secondary text-right max-w-[60%]">
                  {fee.observation}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
