import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

const Experience = () => {
    return (
        <div className="content py-10">

          <h2 className={`${inter.className} text-4xl capitalize font-extrabold tracking-tight`}>Experience</h2>

          <div className="flex">
            <div className="flex flex-col w-1/2">
              <h2>Work History</h2>
              <div>Timeline here</div>
            </div>
            <div className="flex flex-col w-1/3">
              <h2>Education</h2>
              <div>Timeline here</div>
            </div>
          </div>

        </div>          
    )
}

export default Experience