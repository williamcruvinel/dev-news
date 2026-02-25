import NewsCard from './NewsCard';
import { newsMock } from '@/data/news';

export default function NewsSection() {

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Últimas notícias</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5">
        {newsMock.slice(-7, -1).map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </section>
  );
}
