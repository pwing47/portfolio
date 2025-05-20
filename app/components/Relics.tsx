const Relics = () => {
    return (
        <div className="content">
          <h2>Relics</h2>
          <p>Early work that got me in the right direction.<br />These guys stick around for old times' sake.</p>

          <div className="project_preview">
            <a href="projects/mayroach"><div className="project_thumb" id="mayroach"><img alt="May Roach Hall" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_mayroach.jpg" /></div>
              <h3>May Roach Hall</h3></a>
            <span className="description">Residence hall site built for campus government</span>
          </div>
          <div className="project_preview">
            <a href="projects/hologenerator"><div className="project_thumb" id="hologenerator"><img alt="Hologenerator" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_hologenerator.jpg" /></div>
              <h3>Holo-Generator</h3></a>
            <span className="description">Advertisement for a fictional hologram device</span>
          </div>
          <div className="project_preview">
            <a href="projects/ecard"><div className="project_thumb" id="ecard"><img alt="E-Card" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_ecard.jpg" /></div>
              <h3>E-Card</h3></a>
            <span className="description">Animated, interactive greeting card</span>
          </div>
          <div className="project_preview">
            <a href="projects/involvement"><div className="project_thumb" id="involvementboard"><img alt="Involvement Board" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_involvementboard.jpg" /></div>
              <h3>Involvement Board</h3></a>
            <span className="description">Postings for campus events and opportunities</span>
          </div>
        </div>
    )
}

export default Relics