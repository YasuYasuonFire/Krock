import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

function NewsSection() {
  const news = [
    {
      date: "2024-03-15",
      title: "DAY6 Announces World Tour",
      content: "DAY6 is set to embark on their biggest world tour yet, visiting 20 cities across Asia, Europe, and America."
    },
    {
      date: "2024-03-10",
      title: "FTISLAND's New Album",
      content: "FTISLAND reveals teaser for their upcoming album 'Rock Revolution' scheduled for release next month."
    },
    {
      date: "2024-03-05",
      title: "CNBLUE's 15th Anniversary",
      content: "CNBLUE celebrates their 15th anniversary with a special online concert and fan meeting."
    }
  ];

  return (
    <section className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-white mb-6">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item) => (
          <article key={item.title} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group">
            <div className="flex items-center space-x-2 text-pink-400 mb-3">
              <Calendar className="w-4 h-4" />
              <time className="text-sm">{item.date}</time>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.content}</p>
            <button className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors">
              <span>Read more</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;