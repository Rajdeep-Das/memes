import { MemesView } from "@/components/memes-view";
import MemesDB from "@/public/memes.json";

export default function Home() {
  const timeStamp = new Date().getTime();
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <p className="bg-gradient-to-r from-red-600 via-orange-400 to-violet-400 inline-block text-transparent bg-clip-text text-2xl p-2">
        Have Fun Developers
      </p>
      {/* <MemesView imgURL={"/" + getRandomElement(MemesDB).path} /> */}
      <MemesView
        imgURL={`${"/" + getRandomElement(MemesDB).path}?${timeStamp}`}
      />
      {JSON.stringify(getRandomElement(MemesDB).path)}
    </main>
  );
}

function getRandomElement(arr: any[]) {
  return arr[getRandomInt(arr.length)];
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
