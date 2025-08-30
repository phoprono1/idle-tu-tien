
import type { Realm } from './types';

export const REALMS: Realm[] = [
  { name: 'Phàm Nhân', threshold: 0, color: 'text-gray-400', shadowColor: 'shadow-gray-400/50', basePointsPerSecond: 1 },
  { name: 'Luyện Khí Kỳ', threshold: 100, color: 'text-white', shadowColor: 'shadow-white/50', basePointsPerSecond: 5 },
  { name: 'Trúc Cơ Kỳ', threshold: 1000, color: 'text-green-400', shadowColor: 'shadow-green-400/50', basePointsPerSecond: 25 },
  { name: 'Kim Đan Kỳ', threshold: 10000, color: 'text-yellow-400', shadowColor: 'shadow-yellow-400/50', basePointsPerSecond: 100 },
  { name: 'Nguyên Anh Kỳ', threshold: 50000, color: 'text-blue-400', shadowColor: 'shadow-blue-400/50', basePointsPerSecond: 500 },
  { name: 'Hoá Thần Kỳ', threshold: 250000, color: 'text-purple-400', shadowColor: 'shadow-purple-400/50', basePointsPerSecond: 2500 },
  { name: 'Luyện Hư Kỳ', threshold: 1000000, color: 'text-indigo-400', shadowColor: 'shadow-indigo-400/50', basePointsPerSecond: 10000 },
  { name: 'Hợp Thể Kỳ', threshold: 5000000, color: 'text-pink-400', shadowColor: 'shadow-pink-400/50', basePointsPerSecond: 50000 },
  { name: 'Đại Thừa Kỳ', threshold: 25000000, color: 'text-red-500', shadowColor: 'shadow-red-500/50', basePointsPerSecond: 250000 },
  { name: 'Độ Kiếp Kỳ', threshold: 100000000, color: 'text-orange-500', shadowColor: 'shadow-orange-500/50', basePointsPerSecond: 1000000 },
  { name: 'Tiên Nhân', threshold: Infinity, color: 'text-cyan-300', shadowColor: 'shadow-cyan-300/50', basePointsPerSecond: 5000000 },
];