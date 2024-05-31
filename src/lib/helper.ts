export const isBrowser = typeof window !== 'undefined';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function getPageHeight() {
  const topSpacing = 100;

  return `calc(100vh - ${topSpacing}px)`;
}