import { AnimalList } from '../cmps/AnimalList.jsx';
import { CountDown } from '../cmps/CountDown.jsx';
import { MouseMonitor } from '../cmps/MouseMonitor.jsx';
import { SeasonClock } from '../cmps/SeasonClock.jsx';
import { WatcherApp } from '../cmps/WatcherApp.jsx';

const animalinfos = [
  { type: 'Axolotl', count: 800 },
  { type: 'Saola', count: 750 },
  { type: 'Malayan Tiger', count: 787 },
  { type: 'Mountain Gorilla', count: 212 },
  { type: 'Fin Whale', count: 28 },
];
export function Home() {
  return (
    <section className="home">
      <h2>Home Sweet Home</h2>
      <AnimalList animalinfos={animalinfos} />
      <SeasonClock />
      <CountDown
        toTime={Date.now() + 10000 * 2}
        startFrom={10}
        onDone={() => {
          console.log('Done!');
        }}
      />
      <WatcherApp />
      <MouseMonitor />
    </section>
  );
}
