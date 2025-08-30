
export interface Realm {
  name: string;
  threshold: number;
  color: string; // Tailwind CSS color class e.g. 'text-green-400'
  shadowColor: string; // Tailwind CSS shadow color e.g. 'shadow-green-400/50'
  basePointsPerSecond: number;
}