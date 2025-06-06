import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({
  subsets: ["latin"],
});

const Projects = () => {
    return (
        <div className="content py-10">
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Projects</h2>

          <div className="w-full lg:w-7/8 mt-8">
          
          <h3 className={`${inter.className} text-2xl capitalize font-extrabold tracking-tight`}>Consonance</h3>
          <p className="text-xl">Word game for Android and iOS</p>

          <ul className={`${inter.className} text-sm my-4 list-disc lg:ml-6 w-full lg:w-7/8 group aos-init aos-animate`} data-aos="fade-up" data-aos-delay="0">
          <li className="p-2">
This word game leverages an innovative hint algorithm built with Angular and OpenAI API.
</li>
<li className="p-2">
Players experience a mix of letters and must navigate through strategically-placed decoy letters.
</li>
<li className="p-2">
Choose daily challenges, practice mode, or attempt to unlock 50 unique achievements.
          </li></ul>

          <div className="flex my-4 mt-8 justify-center lg:justify-start group aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">

          <a href="https://play.google.com/store/apps/details?id=com.philipcowles.consonance&hl=en_US">
            <Image src="/playstore.svg" width="180" height="53"  alt="Google Play Store" />
          </a>
          
          <a href="https://apps.apple.com/us/app/consonance/id6569233995">
          <Image src="/appstore.png" width="150" height="30"  alt="Apple App Store" />
          
          </a>
          </div>

          

          

          <div className="grid grid-cols-4 gap-4 mt-12 mx-8 lg:mx-0 content-evenly group aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
          <Image width="810" height="1440" alt="Consonance gameplay" src="/consonance1.webp" className="shadow-lg rounded-md" />
          <Image width="810" height="1440" alt="Consonance main menu" src="/consonance2.webp" className="shadow-lg rounded-md" />
          <Image width="810" height="1440" alt="Consonance game menus" src="/consonance3.webp" className="shadow-lg rounded-md" />
          <Image width="810" height="1440" alt="Consonance achievements" src="/consonance4.webp" className="shadow-lg rounded-md" />
          </div>
          
          
          
          
          </div>
          
        </div>
    )
}

export default Projects