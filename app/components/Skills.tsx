
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Skills = () => {
    return (
        <div className="content py-10">

            <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Skills</h2>

            <p className="text-teal-800 text-2xl mt-8">A few things I'm good at</p>
            
            <div className="mt-4 skills-grid grid grid-cols-6 gap-4 w-1/2">

                <div id="skill_photoshop" className="tooltip" data-title="Photoshop"></div>
                <div id="skill_dreamweaver" className="tooltip" data-title="Dreamweaver"></div>
                <div id="skill_illustrator" className="tooltip" data-title="Illustrator"></div>
              
                <div id="skill_flash" className="tooltip" data-title="Flash"></div>
                <div id="skill_air" className="tooltip" data-title="AIR for Android / iOS"></div>
                <div id="skill_as3" className="tooltip" data-title="ActionScript 3"></div>
              
                <div id="skill_html" className="tooltip" data-title="HTML"></div>
                <div id="skill_css" className="tooltip" data-title="CSS"></div>
                <div id="skill_jquery" className="tooltip" data-title="Javascript / jQuery"></div>
              
                <div id="skill_net" className="tooltip" data-title="Microsoft .NET"></div>
                <div id="skill_vs2010" className="tooltip" data-title="Visual Studio 2010"></div>
                <div id="skill_mssql" className="tooltip" data-title="MS SQL Server"></div>
              
                <div id="skill_php" className="tooltip" data-title="PHP"></div>
                <div id="skill_mysql" className="tooltip" data-title="MySQL"></div>
                <div id="skill_mobile" className="tooltip" data-title="Mobile Development"></div>
              
                <div id="skill_joomla" className="tooltip" data-title="Joomla!"></div>
                <div id="skill_email" className="tooltip" data-title="HTML Email"></div>
                <div id="skill_photography" className="tooltip" data-title="Photography"></div>

            </div>

            <div className="grid">

              {/* CMS */}
              <div>Sitecore</div>
              <div>Adobe AEM</div>
              <div>Adobe Commerce</div>
              <div>BigCommerce</div>
              <div>Drupal</div>
              <div>Joomla</div>
              <div>WordPress</div>
              <div>MS Dynamics 365</div>

              {/* <div>Front end dev ---</div> */}
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Typescript</div>
              <div>Tailwind</div>
              <div>NextJS</div>
              <div>React</div>
              <div>Angular</div>

              {/* <div>Back end dev ---</div> */}
              <div>.NET</div>
              <div>C#</div>
              <div>Azure</div>
              <div>MS SQL</div>
              <div>MySQL</div>
              <div>GraphQL</div>
              <div>IIS</div>
              <div>Docker</div>
              <div>Git</div>
              <div>REST APIs</div>              
              <div>Ionic</div>
              
              {/* <div>Digital marketing ---</div> */}
              <div>CMS Content Authoring</div>
              <div>Braze</div>
              <div>MailChimp</div>
              <div>SEMRush</div>
              <div>ahrefs</div>
              <div>Google Search Console</div>
              <div>SEO</div>
              <div>Keyword Research</div>
              <div>Link Building </div>
              <div>Retargeting</div>
              <div>Web Accessibility</div>
              <div>Google Lighthouse</div>
              
              {/* <div>UI/UX Design ---</div> */}
              <div>Figma</div>
              <div>Photoshop</div>
              <div>Illustrator</div>
              <div>Premiere</div>
              <div>Animate</div>
              <div>Usability Testing</div>
              <div>A/B Testing</div>
              <div>Eye Tracking </div>
              <div>Balsamiq</div>
              
              {/* <div>Tools ---</div> */}
              <div>Visual Studio</div>
              <div>VS Code</div>
              <div>Postman</div>
              <div>Android Studio</div>
              <div>Cloudflare</div>
              <div>New Relic</div>
              <div>ServiceNOW</div>
              <div>Azure DevOps</div>
              <div>Jira</div>
              <div>Vercel </div>
              <div>Supabase</div>

            </div>

          </div>
    )
}

export default Skills