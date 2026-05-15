import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null
  const { km, m } = payload[0].payload
  return (
    <div className="bg-forest text-white px-3 py-2 rounded-lg shadow-xl text-xs">
      <div className="font-bold">{km} km</div>
      <div className="text-ember">{m} m n.v.</div>
    </div>
  )
}

export default function ElevationChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="emberGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f4801a" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#f4801a" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="km"
          tick={{ fontSize: 11, fill: '#9ca3af' }}
          tickFormatter={(v) => `${v}km`}
          stroke="#e5e7eb"
        />
        <YAxis
          tick={{ fontSize: 11, fill: '#9ca3af' }}
          tickFormatter={(v) => `${v}m`}
          stroke="#e5e7eb"
          domain={['dataMin - 30', 'dataMax + 30']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="m"
          stroke="#f4801a"
          strokeWidth={2}
          fill="url(#emberGrad)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
