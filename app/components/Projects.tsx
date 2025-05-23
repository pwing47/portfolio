import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({
  subsets: ["latin"],
});

const Projects = () => {
    return (
        <div className="content py-10">
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Projects</h2>

          <div className="w-7/8">
          
          <h3>Consonance</h3>
          <p>Word game for Android and iOS</p>

          <div className="my-4">
          <p>
This word game leverages an innovative word and hint algorithm built with Angular, TypeScript, and OpenAI API.
</p><p>
Players experience a mix of jumbled letters where not all is as it seems, and must navigate through strategically-placed decoy letters.
</p><p>
Players can choose daily challenges, practice mode to keep skills sharp, or attempt to unlock 50 unique achievements.</p>
          </div>

          <div className="flex my-4">

          <Image src="/playstore.svg" width="180" height="53"  alt="Google Play Store" />
          <Image src="/appstore.png" width="150" height="30"  alt="Apple App Store" />
          </div>

          

          

          <div className="grid grid-cols-4 gap-4">
          <Image width="230" height="498" alt="Consonance screenshot" src="/consonance1.webp" className="shadow-lg rounded-md" />
          <Image width="230" height="498" alt="Consonance screenshot" src="/consonance1.webp" className="shadow-lg rounded-md" />
          <Image width="230" height="498" alt="Consonance screenshot" src="/consonance1.webp" className="shadow-lg rounded-md" />
          <Image width="230" height="498" alt="Consonance screenshot" src="/consonance1.webp" className="shadow-lg rounded-md" />
          </div>
          
          
          
          
          </div>
          
        </div>
    )
}

export default Projects