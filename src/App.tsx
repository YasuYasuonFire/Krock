import React, { useState } from 'react';
import { Guitar, Music, Heart, Calendar, Play, ExternalLink } from 'lucide-react';
import BandSection from './components/BandSection';
import Header from './components/Header';
import NewsSection from './components/NewsSection';

function App() {
  const [activeTab, setActiveTab] = useState('day6');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {activeTab === 'day6' && (
            <BandSection
              name="DAY6"
              description="Known for their emotional lyrics and powerful rock sound, DAY6 has captured hearts worldwide with hits like 'You Were Beautiful' and 'Sweet Chaos'."
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920"
              members={["Sungjin", "Young K", "Wonpil", "Dowoon"]}
              songs={[
                { title: "Sweet Chaos", year: "2019" },
                { title: "You Were Beautiful", year: "2017" },
                { title: "Time of Our Life", year: "2019" }
              ]}
            />
          )}

          {activeTab === 'ftisland' && (
            <BandSection
              name="FTISLAND"
              description="Pioneers of the K-rock movement, FTISLAND brings raw energy and authentic rock sound with their impressive discography."
              image="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1920"
              members={["Choi Jong-hoon", "Lee Hong-gi", "Lee Jae-jin", "Song Seung-hyun", "Choi Min-hwan"]}
              songs={[
                { title: "Love Sick", year: "2007" },
                { title: "I Hope", year: "2009" },
                { title: "Wind", year: "2019" }
              ]}
            />
          )}

          {activeTab === 'cnblue' && (
            <BandSection
              name="CNBLUE"
              description="Blending rock with pop sensibilities, CNBLUE creates music that resonates across genres and borders."
              image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920"
              members={["Jung Yong-hwa", "Lee Jong-hyun", "Kang Min-hyuk", "Lee Jung-shin"]}
              songs={[
                { title: "I'm a Loner", year: "2010" },
                { title: "Can't Stop", year: "2014" },
                { title: "Between Us", year: "2017" }
              ]}
            />
          )}

          <NewsSection />
        </div>
      </main>

      <footer className="bg-black/30 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Guitar className="w-6 h-6" />
              <span className="text-xl font-bold">K-Rock Universe</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-400 transition-colors"><Music className="w-5 h-5" /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Heart className="w-5 h-5" /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Calendar className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;