import React from 'react';
import { Play, User, Music } from 'lucide-react';

interface Song {
  title: string;
  year: string;
}

interface BandSectionProps {
  name: string;
  description: string;
  image: string;
  members: string[];
  songs: Song[];
}

function BandSection({ name, description, image, members, songs }: BandSectionProps) {
  return (
    <section className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">{name}</h2>
          <p className="text-lg max-w-2xl">{description}</p>
        </div>
      </div>

      <div className="p-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-6 rounded-xl">
          <div className="flex items-center space-x-2 mb-4">
            <User className="w-5 h-5 text-pink-400" />
            <h3 className="text-xl font-semibold text-white">Members</h3>
          </div>
          <ul className="space-y-2">
            {members.map((member) => (
              <li key={member} className="text-gray-300 hover:text-white transition-colors">
                {member}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <div className="flex items-center space-x-2 mb-4">
            <Music className="w-5 h-5 text-pink-400" />
            <h3 className="text-xl font-semibold text-white">Popular Songs</h3>
          </div>
          <ul className="space-y-4">
            {songs.map((song) => (
              <li key={song.title} className="flex items-center justify-between">
                <div>
                  <p className="text-white">{song.title}</p>
                  <p className="text-sm text-gray-400">{song.year}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Play className="w-5 h-5 text-pink-400" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BandSection;