import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Interests = () => {
    return (
        <div className="content py-10 flex flex-col items-center">
          
          <p className="text-xl">A few of my</p>
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Interests</h2>


  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-3/4 mt-3 mb-12 px-18 lg:px-0">

            <div className="interest" id="interest_concerts">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Concerts</h4>
              <span className="text-md text-gray-500">Nothing quite like front row</span>
              <div className="pic"></div>
            </div>
            <div className="interest" id="interest_ultimate">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Ultimate Frisbee</h4>
              <span className="text-md text-gray-500">Throw, catch, repeat</span>
              <div className="pic"></div>
            </div>
            <div className="interest" id="interest_running">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Running</h4>
              <span className="text-md text-gray-500">I guess I have a lot of shoes</span>
              <div className="pic"></div>
            </div>
            <div className="interest" id="interest_webdesign">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Web Design</h4>
              <span className="text-md text-gray-500">Not just a profession, you know</span>
              <div className="pic"></div>
            </div>
            <div className="interest" id="interest_vinyl">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Vinyl</h4>
              <span className="text-md text-gray-500">It's just way more fun</span>
              <div className="pic"></div>
            </div>
            <div className="interest" id="interest_books">
              <h4 className={`${inter.className} text-xl capitalize font-extrabold tracking-tight`}>Books</h4>
              <span className="text-md text-gray-500">Learning is the bomb</span>
              <div className="pic"></div>
            </div>

          </div>

        </div>

    )
}

export default Interests