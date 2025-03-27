export const KpiPercentageBar = (percentage: number) => {
  const width = percentage * 200;

  return `data:image/svg+xml;charset=UTF-8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="transparent" />
    <rect width="${width}" height="200" fill="#00ff8c" />
    <text fill="#000" font-family="Arial" font-size="60" x="100" y="135" dominant-baseline="middle" text-anchor="middle">${(percentage * 100).toFixed(0)}%</text>
  </svg>`;
};
