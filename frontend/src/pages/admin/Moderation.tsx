import React from 'react'

export default function Moderation(){
  const reported = [
    { id: 'p1', type: 'profile', name: 'Amina', reason: 'Offensive photos', createdAt: '2026-08-15' },
    { id: 'c1', type: 'chat', name: 'Chat #42', reason: 'Harassment', createdAt: '2026-08-14' },
  ]

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <h2 className="text-lg font-medium mb-2">Moderation queue</h2>
        <div className="space-y-3">
          {reported.map(r => (
            <div key={r.id} className="flex items-start justify-between border rounded p-3">
              <div>
                <div className="font-medium">{r.type === 'profile' ? 'Profile' : 'Chat'} — {r.name}</div>
                <div className="text-sm text-gray-500">{r.reason} • {r.createdAt}</div>
              </div>
              <div className="space-x-2">
                <button className="px-3 py-1 rounded border" onClick={() => alert('Accept - mock')}>Accept</button>
                <button className="px-3 py-1 rounded border" onClick={() => alert('Reject - mock')}>Reject</button>
                <button className="px-3 py-1 rounded btn-brand-pink" onClick={() => alert('Ban user - mock')}>Ban</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4">
        <h3 className="text-md font-medium">Automated AI safety alerts</h3>
        <p className="text-sm text-gray-600">No critical AI alerts in the last 24 hours (demo).</p>
      </div>
    </div>
  )
}
