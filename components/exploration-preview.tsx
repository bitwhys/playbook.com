export function ExplorationPreview({
  variant,
}: {
  variant: 'bars' | 'curve' | 'scatter'
}) {
  return (
    <div className="relative h-full w-full p-6 sm:p-10">
      <span className="absolute top-4 left-5 text-xs text-gray-11">
        Sample exploration
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 480 200"
        className="h-full w-full"
        fill="none"
      >
        <path
          d="M40 20V170H450"
          stroke="currentColor"
          className="text-gray-7"
        />
        {[50, 90, 130].map((y) => (
          <path
            key={y}
            d={`M40 ${y}H450`}
            stroke="currentColor"
            strokeDasharray="3 7"
            className="text-gray-6"
          />
        ))}
        {variant === 'bars' &&
          [52, 87, 69, 119, 98, 142, 127].map((height, i) => (
            <rect
              key={i}
              x={65 + i * 54}
              y={170 - height}
              width="28"
              height={height}
              rx="2"
              fill="currentColor"
              className={i === 5 ? 'text-accent-9' : 'text-gray-7'}
            />
          ))}
        {variant === 'curve' && (
          <>
            <path
              d="M40 165C130 165 135 30 240 30S350 165 450 165"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent-9"
            />
            <path
              d="M240 30V170"
              stroke="currentColor"
              strokeDasharray="4 5"
              className="text-gray-9"
            />
            <circle
              cx="240"
              cy="30"
              r="6"
              fill="currentColor"
              className="text-accent-9"
            />
          </>
        )}
        {variant === 'scatter' && (
          <>
            <path
              d="M60 155L430 40"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="text-gray-9"
            />
            {[
              [70, 140],
              [100, 155],
              [130, 114],
              [155, 135],
              [180, 100],
              [215, 121],
              [250, 70],
              [280, 93],
              [310, 60],
              [340, 75],
              [380, 35],
              [420, 55],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="currentColor"
                className={i % 3 === 0 ? 'text-accent-9' : 'text-gray-8'}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  )
}
