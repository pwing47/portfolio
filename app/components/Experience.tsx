const Experience = () => {
    return (
        <div className="content">
          <h2>Portfolio</h2>
          <p>Projects, both professional and personal.</p>

          <div className="project_preview">
            <a href="projects/fastword"><div className="project_thumb" id="fastword"><img alt="Fastword" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_fastword.jpg" /></div>
              <h3>Fastword</h3></a>
            <span className="description">Mobile word game that tests reflexes and vocabulary</span>
          </div>
          <div className="project_preview">
            <a href="projects/heavylooks"><div className="project_thumb" id="heavylooks"><img alt="Heavy Looks" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_heavylooks.jpg" /></div>
              <h3>Heavy Looks</h3></a>
            <span className="description">Online presence for a Madison, WI band</span>
          </div>
          <div className="project_preview">
            <a href="projects/giveunique"><div className="project_thumb" id="giveunique"><img alt="GiveUnique" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_giveunique.jpg" /></div>
              <h3>GiveUnique</h3></a>
            <span className="description">Storefront for a personalized packaging brand</span>
          </div>
          <div className="project_preview">
            <a href="projects/swensontrends"><div className="project_thumb" id="swensontrends"><img alt="Swenson Trends" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_swensontrends.jpg" /></div>
              <h3>Swenson Trends</h3></a>
            <span className="description">Author's newsletter, distributed via email and web</span>
          </div>
          <div className="project_preview">
            <a href="projects/rcc"><div className="project_thumb" id="redcedarcollision"><img alt="Red Cedar Collision" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_redcedarcollision.jpg" /></div>
              <h3>Red Cedar Collision</h3></a>
            <span className="description">Web content for an autobody business</span>
          </div>
          <div className="project_preview">
            <a href="projects/banter"><div className="project_thumb" id="baseballbanter"><img alt="Baseball Banter" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_baseballbanter.jpg" /></div>
              <h3>Baseball Banter</h3></a>
            <span className="description">Sports forum with a game-like atmosphere</span>
          </div>
          <div className="project_preview">
            <a href="projects/colorpath"><div className="project_thumb" id="colorpath"><img alt="Colorpath" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_colorpath.jpg" /></div>
              <h3>Colorpath</h3></a>
            <span className="description">Demo site for personalized print campaigns</span>
          </div>
          <div className="project_preview">
            <a href="projects/kidzsignment"><div className="project_thumb" id="kidzsignment"><img alt="Kidzsignment" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_kidzsignment.jpg" /></div>
              <h3>Kidzsignment</h3></a>
            <span className="description">Website for a seasonal kids consignment sale</span>
          </div>
          <div className="project_preview">
            <a href="projects/shakechampion"><div className="project_thumb" id="shakechampion"><img alt="Shake Champion" src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/preview_shakechampion.jpg" /></div>
              <h3>Shake Champion</h3></a>
            <span className="description">One simple goal: shake your phone as fast as possible</span>
          </div>
        </div>
    )
}

export default Experience