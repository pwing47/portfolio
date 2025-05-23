import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Interests = () => {
    return (
        <div className="content py-10">
          
          <span>A few of my</span>
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Interests</h2>


          <img id="about_ps" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/about_ps.png" alt="Photoshop 4 through today" title="The tools have a changed a bit" />
          <p>&nbsp;</p>
          <p>After building my first website in 5th grade, I became friends with Photoshop, Dreamweaver, and Flash. The rest, I suppose, is history.</p>
          <p>&nbsp;</p>
          <p>The toolbelt continues to grow. I've had the opportunity to work with all types of technologies, covering design and code.</p>

          <div className="grid grid-cols-2 gap-4 w-3/4">

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