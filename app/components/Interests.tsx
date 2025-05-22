import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Interests = () => {
    return (
        <div className="content py-10">
          
          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Interests</h2>


          <img id="about_ps" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/about_ps.png" alt="Photoshop 4 through today" title="The tools have a changed a bit" />
          <p>&nbsp;</p>
          <p>After building my first website in 5th grade, I became friends with Photoshop, Dreamweaver, and Flash. The rest, I suppose, is history.</p>
          <p>&nbsp;</p>
          <p>The toolbelt continues to grow. I’ve had the opportunity to work with all types of technologies, covering design and code.</p>
          <p>&nbsp;</p>
          <p>Want to see what I can do? <a href="#about" id="letmeknow">Let me know!</a></p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <span className="pre_header">A few of my</span>
          <h2>Interests</h2>
          <div className="interest" id="interest_concerts">
            <h4>Concerts</h4>
            <span className="description">Nothing quite like front row</span>
            <div className="pic"></div>
          </div>
          <div className="interest" id="interest_ultimate">
            <h4>Ultimate Frisbee</h4>
            <span className="description">Throw, catch, repeat</span>
            <div className="pic"></div>
          </div>
          <div className="interest" id="interest_running">
            <h4>Running</h4>
            <span className="description">I guess I have a lot of shoes</span>
            <div className="pic"></div>
          </div>
          <div className="interest" id="interest_webdesign">
            <h4>Web Design</h4>
            <span className="description">Not just a profession, you know</span>
            <div className="pic"></div>
          </div>
          <div className="interest" id="interest_vinyl">
            <h4>Vinyl</h4>
            <span className="description">It's just way more fun</span>
            <div className="pic"></div>
          </div>
          <div className="interest" id="interest_books">
            <h4>Books</h4>
            <span className="description">Learning is the bomb</span>
            <div className="pic"></div>
          </div>
        </div>
    )
}

export default Interests