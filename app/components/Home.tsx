import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ["latin"],
});

const Home = () => {
    return (
        <div className="content pt-8 pb-10 lg:pt-10">
          
          
          <div id="home_intros" className="flex flex-col-reverse lg:flex-row">
            

            <div>

            <span className="text-4xl">Hey, I'm</span>
          <h1 className={`${inter.className} text-7xl capitalize font-extrabold tracking-tight`}>Philip Cowles</h1>


              <p className="text-teal-800 text-2xl mt-8">Nice to meet you! I'm a</p>
              <p className={`${inter.className} text-teal-950 text-4xl font-bold tracking-tight leading-tight`}>full-stack developer, <br/>digital marketer, and<br />UX designer.</p>
              
              <div className="flex mt-6 justify-center lg:justify-start">
            <div className="btn-link text-2xl font-bold py-3 px-10 pl-6 m-6 ml-0 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span>Resume</span>
            </div>

            <div className="btn-link text-2xl font-bold py-3 px-10 pl-6 m-6 ml-0 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
              <span>LinkedIn</span>
            </div>

          </div>

            </div>

            <div id="mug" title="It's me!" className="rounded-full lg:h-full ml-3 lg:ml-3 xl:ml-12 mt-0 lg:mt-12 max-lg:mb-6 shadow-lg">
              <Image className="rounded-full p-3 opacity-90" src="/face.jpg" width="300" height="300" alt="Face of Philip Cowles" />
              
            </div>

            
          </div>

          
          

        </div>
    )
}

export default Home