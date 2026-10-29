import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '../src/i18n/LanguageContext';
import { Home } from '../src/pages/Home';
import { Characters } from '../src/pages/Characters';
import { CharacterDetail } from '../src/pages/CharacterDetail';
import { Stories } from '../src/pages/Stories';
import { StoryDetail } from '../src/pages/StoryDetail';
import { About } from '../src/pages/About';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

const cases: [string, string][] = [
  ['/', 'home'],
  ['/characters', 'characters'],
  ['/characters/krishna', 'krishna'],
  ['/characters/bhima', 'bhima'],
  ['/characters/does-not-exist', '404'],
  ['/stories', 'stories'],
  ['/stories/astika', 'astika'],
  ['/stories/khandava-daha', 'khandava'],
  ['/about', 'about'],
];

for (const [path, label] of cases) {
  const html = renderToString(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<StoryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<CharacterDetail />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </MemoryRouter>,
  );
  console.log(label.padEnd(12), 'rendered', String(html.length).padStart(7), 'chars');
  if (html.length < 4000) throw new Error(`${label} rendered suspiciously little`);
}
console.log('SSR render checks passed');
