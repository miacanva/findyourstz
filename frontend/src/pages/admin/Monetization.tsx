import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const tiers = [
  { name: 'Platinum', count: 12 },
  { name: 'Gold', count: 34 },
  { name: 'Silver', count: 56 },
  { name: 'Free', count: 398 },
]

const COLORS = ['#0ea5e9', '#FF5864', '#60a5fa', '#94a3b8']

export default function Monetization(){
  return (
    <div className="space-y-6">
      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Active VIP tiers</h2>
        <div className="grid grid-cols-4 gap-4">
          {tiers.map(t => (
            <div key={t.name} className="p-3 border rounded text-center">
              <div className="text-2xl font-semibold">{t.count}</div>
              <div className="text-sm text-gray-600">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Revenue (last 30 days)</h2>
        <div style={{ width: '100%', height: 220 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={tiers} dataKey="count" nameKey="name" outerRadius={80} fill="#8884d8">
                {tiers.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 text-sm text-gray-600">Payment gateways: Stripe (mock), M-Pesa (mock). Total revenue: $4,320 (demo).</div>
      </section>
    </div>
  )
}
