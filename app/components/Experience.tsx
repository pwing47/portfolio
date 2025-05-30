import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Experience = () => {

    return (
        <div className="content py-10 flex flex-col max-lg:items-center text-left">

          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight text-left`}>Experience</h2>

          <div className="grid xl:grid-cols-2 grid-cols-1 max-sm:grid-flow-row mt-2 w-9/10 md:w-1/2 lg:w-2/3 xl:w-full">
            <div>
              <h3 className="text-2xl">Work History</h3>
              <div className={`${inter.className}`}>
                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">

                  <div className="tracking-tight text-md text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">Sub-Zero Wolf</div>
                  
                  <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3">2023 - Now</time>
                    <div className="text-ld text-slate-800 font-bold tracking-tight max-sm:text-left">Web Development Technical Lead</div>
                  </div>

                  <div className="text-slate-500 text-xs w-[90%] max-sm:w-full text-left">
                    Promoted to leadership to guide Sitecore and AEM web development and mobile app teams
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  
                  <div className="tracking-tight text-md max-sm:text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">Sub-Zero Wolf</div>

                  <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3">2019 - 2023</time>
                  <div className="text-ld text-slate-800 font-bold tracking-tight max-sm:text-left">Sitecore Web Developer/Analyst</div>
                  </div>
                  <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left">                    
                    Develop and maintain public and internal websites while assisting marketing CMS content authors
                  </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="tracking-tight text-md max-sm:text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">Saris Cycling Group</div>

                    <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start"><time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3"> 2015 - 2019</time>
                      <div className="text-ld text-slate-800 font-bold tracking-tight max-sm:text-left">Digital Marketing Manager &amp; Developer</div>
                    </div>

                    <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left ">
                      Oversee the design, development, and CMS content authoring of six company websites leveraging .NET
                    </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="tracking-tight text-md max-sm:text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">Epic</div>

                    <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start"><time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3"> 2012 - 2015</time>
                      <div className="text-ld text-slate-800 font-bold tracking-tight text-left">UX Designer</div>
                    </div>

                    <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left ">
                      Wireframe and design innovative and beautiful user interfaces for millions of healthcare professionals
                    </div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <div className="tracking-tight text-md max-sm:text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">ZubaWing LLC</div>
                <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3"> 2010 - 2012</time>
                  <div className="text-ld text-slate-800 font-bold tracking-tight max-sm:text-left">Senior Application Developer</div>
                </div>
                <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left">
                Brainstorm, design, and develop a variety of Android and iOS games and apps
                </div> 
                </div>
				    </div>
				  </div>

          {/* Education */}
				  <div>
          <h3 className="text-2xl">Education</h3>
            <div className={`${inter.className}`}>

              <div className="max-sm:my-2">
                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  
                <div className="tracking-tight text-md text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0">Wisconsin School of Business</div>
                  <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3">2025 - 2026</time>
                    
                    <div className="text-ld text-slate-800 font-bold tracking-tight text-left">Advanced Management &amp; Leadership</div>
                    
                    
                  </div>
                
                  <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left">
                    Certificate, Expected Spring 2026
                  </div>
                </div>
                
                <div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="tracking-tight text-md max-sm:text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0 text-left">Wisconsin School of Business</div>
                
                <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3">2024 - 2025</time>
                
                <div className="text-ld text-slate-800 font-bold tracking-tight">Foundations of Management</div>
                </div>
                <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left">
                  Certificate, February 2025
                  {/* Gives leaders the skills needed to manage teams, leverage resources, and enhance processes to meet strategic goals. */}
                </div>
                </div><div className="relative pl-8 sm:pl-32 py-6 group aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="tracking-tight text-md text-left text-slate-400 mb-1 sm:mb-0 max-sm:mb-0">University of Wisconsin-Stevens Point</div>
                <div className="flex flex-col sm:flex-row items-center mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 max-sm:text-left max-sm:items-start">
                
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium w-24 h-10 max-sm:h-4 mb-3 sm:mb-0 text-slate-600 bg-slate-100 rounded-full max-sm:bg-transparent  max-sm:text-left max-sm:mb-0 max-sm:-ml-3">2007 - 2010</time>
                  
                <div className="text-ld text-slate-800 font-bold tracking-tight text-left">Web &amp; Digital Media Development</div>
                  
                  </div>

                  <div className="text-slate-500 text-[12px] w-[90%] max-sm:w-full text-left">
                    Bachelor of Science, December 2010
                  </div>


                </div>
              </div> 
            </div>
					</div>

				</div>
          
      </div>
    )
}

export default Experience