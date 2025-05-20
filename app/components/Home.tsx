
const Home = () => {
    return (
        <div className="content">
          <div id="social">
            <ul>
              <li id="social_linkedin" title="LinkedIn"><a target="_blank" href="http://www.linkedin.com/in/cowles"></a></li>
              <li id="social_googleplus" title="Google+"><a target="_blank" href="http://www.google.com/+PhilipCowles"></a></li>
              <li id="social_facebook" title="Facebook"><a target="_blank" href="http://www.facebook.com/pcowles"></a></li>
            </ul>

            <h4>Email</h4>
            <span className="description">Send me a <a target="_blank" href="mailto:philip.cowles@gmail.com">message</a></span>

            <h4>Resume</h4>
            <span className="description">Get a <a target="_blank" href="docs/resume.doc">DOC</a> or <a target="_blank" href="docs/resume.pdf">PDF</a></span>
          </div>

          <span className="pre_header big">Hey, I'm</span>
          <div id="flip_container">
            <div id="title_area">
              <h1>Philip Cowles</h1>
            </div>
          </div>

          <div id="home_intro">
            <div id="mug" title="It's me!"><img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/mug.png" alt="Face of Philip Cowles" /></div>

            <p className="big">Nice to meet you!</p>
            <p className="loud">I like web design, UX,<br />and interactive stuff.</p>

            <p className="big">Here are a few things I'm good at:</p>
            <div id="skills">
              <div className="skills_col">
                <div id="skill_photoshop" className="tooltip" data-title="Photoshop"></div>
                <div id="skill_dreamweaver" className="tooltip" data-title="Dreamweaver"></div>
                <div id="skill_illustrator" className="tooltip" data-title="Illustrator"></div>
              </div>
              <div className="skills_col">
                <div id="skill_flash" className="tooltip" data-title="Flash"></div>
                <div id="skill_air" className="tooltip" data-title="AIR for Android / iOS"></div>
                <div id="skill_as3" className="tooltip" data-title="ActionScript 3"></div>
              </div>
              <div className="skills_col">
                <div id="skill_html" className="tooltip" data-title="HTML"></div>
                <div id="skill_css" className="tooltip" data-title="CSS"></div>
                <div id="skill_jquery" className="tooltip" data-title="Javascript / jQuery"></div>
              </div>
              <div className="skills_col">
                <div id="skill_net" className="tooltip" data-title="Microsoft .NET"></div>
                <div id="skill_vs2010" className="tooltip" data-title="Visual Studio 2010"></div>
                <div id="skill_mssql" className="tooltip" data-title="MS SQL Server"></div>
              </div>
              <div className="skills_col">
                <div id="skill_php" className="tooltip" data-title="PHP"></div>
                <div id="skill_mysql" className="tooltip" data-title="MySQL"></div>
                <div id="skill_mobile" className="tooltip" data-title="Mobile Development"></div>
              </div>
              <div className="skills_col">
                <div id="skill_joomla" className="tooltip" data-title="Joomla!"></div>
                <div id="skill_email" className="tooltip" data-title="HTML Email"></div>
                <div id="skill_photography" className="tooltip" data-title="Photography"></div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Home