import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Home = () => {
    return (
        <div className="content py-10">
          
          <span className="text-4xl">Hey, I'm</span>
          <h1 className={`${inter.className} text-7xl capitalize font-extrabold tracking-tight`}>Philip Cowles</h1>

          <div id="home_intros">
            <div id="mug" title="It's me!"><img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/mug.png" alt="Face of Philip Cowles" /></div>

            <p className="text-teal-800 text-2xl mt-8">Nice to meet you!</p>
            <p className={`${inter.className} text-teal-950 text-5xl font-extrabold tracking-tight`}>I like web design, UX,<br />and interactive stuff.</p>
            
          </div>

          <div className="flex mt-6">
            <div className="btn-link text-2xl font-bold py-3 px-10 m-6 ml-0 rounded-full">Resume</div>
            <div className="btn-link text-2xl font-bold py-3 px-10 m-6 ml-0 rounded-full">LinkedIn</div>
          </div>
          

        </div>
    )
}

export default Home