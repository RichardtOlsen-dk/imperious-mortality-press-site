import logo from './logo.svg';
import './App.css';
import CryptoJS from 'crypto-js';
import { useState } from "react";

export default function App() {


  const PASSPHRASE = "8e2e10de9c22088ff03318569e65e5fe";
  const [passphrase, setPassphrase] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function unlock(e) {
    e.preventDefault();
    if (CryptoJS.MD5(passphrase).toString() === PASSPHRASE) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect passphrase");
    }
  }

  if (! unlocked) {
     return (
      <div>
        {/* Protected page */}
        <h1>Secret content</h1>


        <form onSubmit={unlock} className="w-full max-w-sm space-y-4">
          <div>
            <label
              htmlFor="passphrase"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
            </label>

            <input
              id="passphrase"
              type="password"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              placeholder="Enter passphrase"
              autoFocus
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#d8551a] px-4 py-3 font-medium text-white transition hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Unlock
          </button>
        </form>

      </div>
    );

  }
 
  return (
    <div class="bg-[#111] w-full max-w-6xl px-4">
      <div class="grid grid-cols-1 md:grid-cols-6">
        <img src="./imperious-mortality-logo.png" class="invert col-span-4 col-start-2"></img>
      </div>
      <h1 class="text-center pb-5">Imperious Mortality</h1>
      <p class="pb-5">
        Imperious Mortality emerged from the Danish underground in 2020, with the sole purpose of delivering unrelenting brutality.
The band’s sound is an assault of razor-sharp riffs, relentless blastbeats and chrushing grooves, blended with surgical precision to deliver maximum devastation.
Across three releases, Imperious Mortality has delved deeper into the realm of darkness and intensity, while maintaining a natural evolution of songwriting and technicality.
Imperious Mortality are now prepared to release their debut full length, set to be released October 2nd.
      </p>
      <div>
        <h1 class="text-center pb-5 mt-8">Abyss of Uncreation</h1>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <iframe 
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay; encrypted-media"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2298396996%3Fsecret_token%3Ds-5KIJHk9hxuV&color=%232e2728&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
        </div>
        <div>
          <p class="">
            With Abyss of Uncreation, Imperious Mortality unleash their most complete and uncompromising work to date. Set for release October 2nd through New Standard Elite, the debut full-length pushes the Danish act's signature blend of razor-sharp riffing, merciless blastbeats and crushing grooves into darker, more destructive territory — a descent into chaos built on relentless intensity, precision and total devastation.
<br/><br/>
Across its songs, the band expand on the foundation laid by their previous releases, delivering a more focused, fully realized sound without sacrificing the raw aggression that defined them from the start. Adding further weight to the record, Abyss of Uncreation features members of Danish extreme-metal act Maximize Bestiality, deepening the album's ties to the darker side of the BDM underground.
          </p>
          <p class="text-center px-5">
            <a href="https://drive.google.com/drive/folders/1SumOYe894EmG-GXplNIqDS8Mp2yRn46c?usp=drive_link" target="_blank"> digital download (wav) </a>
          </p>
          <p class="text-center px-5">
            <a href="https://on.soundcloud.com/Wt90VlWM3lJiXCfRBQ" target="_blank"> album stream (soundcloud) </a>
          </p>
        </div>
      </div>

      <div class="pt-5">
        <h1 class="text-center px-5 mt-8">
          Credits
        </h1>
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <h3>Line-up</h3>
            <p>
              Nima Hajir Azad - vocals<br/>
              Rasmus Jørgensen - guitars, backing vocals
              Sotiris Skarpalezos - bass<br/>
              Richardt Olsen - drums
            </p>
          </div>
          <div>
            <h3>Recording</h3>
            <p>
              Drums recorded by Imperious Mortality at the rehearsal space, April 2026.<br/> 
              Bass recorded by Sotiris Skarpalezos, May 2026. <br/>
              Guitars and vocals recorded by Imperious Mortality at Ominous Brutality Studios, April-July 2026.</p>
            <p>Mixed and mastered by Rasmus Lykke Jørgensen at Ominous Brutality Studios, July 2026.</p>
          </div>
          <div>
            <h3>Misc</h3>
            <p>
              Artwork by Rudi Yanto.<br/>
              Band logo by Amira Hernan.
            </p>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}