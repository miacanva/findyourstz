import React from 'react'

type Report = {
  id: string
  type: 'profile' | 'chat' | 'ai'
  subject: string
  createdAt: string
  status: 'open' | 'reviewed' | 'resolved'
}

const MOCK: Report[] = [
  { id: 'r1', type: 'profile', subject: 'Amina (id:1)', createdAt: '2026-08-15T09:20Z', status: 'open' },
  { id: 'r2', type: 'chat', subject: 'Conversation #42', createdAt: '2026-08-14T18:05Z', status: 'reviewed' },
  { id: 'r3', type: 'ai', subject: 'Auto-flag: image_123.jpg', createdAt: '2026-08-13T12:00Z', status: 'open' },
]

export default function Logs(){
  return (
    <div className="space-y-4">
      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Moderation logs</h2>
        <div className="space-y-2 text-sm text-gray-700">
          {MOCK.map(r => (
            <div key={r.id} className="flex items-center justify-between border-b py-2">
              <div>
                <div className="font-medium">{r.type.toUpperCase()} — {r.subject}</div>
                <div className="text-xs text-gray-500">{r.createdAt}</div>
              </div>
              <div className="text-sm">
                <span className="mr-3">{r.status}</span>
                <button className="px-2 py-1 text-sm rounded border" onClick={() => alert('Open review (mock)')}>Review</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Flagged profiles & reported chats</h2>
        <p className="text-sm text-gray-600">This list shows recent items flagged by users or automated systems.</p>
      </section>
    </div>
  )
}
