import { levels } from '@/levels';

interface MissionCardProps {
  levelId: number;
  className?: string;
}

export function MissionCard({ levelId, className = '' }: MissionCardProps) {
  const level = levels.find(item => item.id === levelId) ?? levels[0];
  const houses = level.houses.filter(house => house.id !== 'Toko' && !house.isWaypoint);
  const accent = level.id === 1 ? '#0f5a31' : level.id === 2 ? '#b45309' : '#be123c';

  return (
    <section
      aria-label={`Misi Level ${level.id}`}
      className={`rounded-xl border-[3px] bg-white px-[2em] py-[0.8em] leading-snug text-neutral-700 ${className}`}
      style={{ borderColor: accent }}
    >
      <h3 className="font-display text-[1.4em] font-black">Misi:</h3>
      <p>Antarkan paket ke semua rumah <strong>({houses[0]?.id}–{houses[houses.length - 1]?.id})</strong>.</p>
      <p>Pilih rute <strong style={{ color: accent }}>paling pendek/paling efisien</strong>!</p>
    </section>
  );
}
