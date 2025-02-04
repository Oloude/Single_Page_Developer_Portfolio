import { SiFrontendmentor } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className="flex flex-col py-10 items-center gap-5 justify-between border-t border-t-grey md:flex-row ">
      <p className="text-2xl font-bold text-white md:text-[32px]">adamkeyes</p>
      <div className="flex gap-6.5 items-center md:gap-8">
      <FaGithub className="text-white w-5 h-5 hover:text-green md:w-6 md:h-6"/>
      <SiFrontendmentor className="text-white w-5 h-5 hover:text-green md:w-6 md:h-6" />
      <FaLinkedin className="text-white w-5 h-5 hover:text-green md:w-6 md:h-6"/>
      <FaTwitter className="text-white w-5 h-5 hover:text-green md:w-6 md:h-6" />
      </div>
    </footer>
  )
}

export default Footer