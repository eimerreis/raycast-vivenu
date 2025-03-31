
/**
 * Renders a percentage tile as svg, to be used inside a Grid imte
 * @param width - The width of the tile
 * @param percentage - The percentage to be displayed. (0-1)
 * @returns
 */
export const PercentageTile = ({ percentage }: { percentage: number }) => {
  return `data:image/svg+xml;charset=UTF-8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="transparent" />
    <rect width="${percentage * 200}" height="200" fill="#00ff8c" />
    <text fill="#000" font-family="Arial" font-size="60" x="100" y="135" dominant-baseline="middle" text-anchor="middle">${(percentage * 100).toFixed(0)}%</text>
  </svg>`;
};


