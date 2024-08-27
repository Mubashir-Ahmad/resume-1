"use client";
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import Image from "next/image";
import img1 from '../../public/a1.jpg'
// import img3 from '../../public/a3.png'
import img4 from '../../public/a4.png'
import img5 from '../../public/a5.png'
import img6 from '../../public/a8.png'
import img7 from '../../public/a9.png'
import img8 from '../../public/a10.png'
import img9 from '../../public/a11.png'
import img10 from '../../public/a12.png'
import img11 from '../../public/a15.png'
import img12 from '../../public/a17.png'
import img13 from '../../public/a14.png'
import img14 from '../../public/a22.png'
import img15 from '../../public/a13.png'
import img16 from '../../public/a21.png'
import img17 from '../../public/a20.png'
import img18 from '../../public/a19.png'
import img19 from '../../public/a20.png'
import img20 from '../../public/a21.png'
import img21 from '../../public/a22.png'
import img22 from '../../public/a23.png'
import img23 from '../../public/a24.png'
import img24 from '../../public/a25.png'
import img25 from '../../public/a26.png'
import img26 from '../../public/a27.png'
import img27 from '../../public/a28.svg'
import img28 from '../../public/a29.png'
import img29 from '../../public/a30.png'
import img31 from '../../public/a31.png'
import img32 from '../../public/a322.png'
import img33 from '../../public/a32.png'
import img34 from '../../public/a34.png'
import img35 from '../../public/a35.png'
import img36 from '../../public/a36.png'
import './main_app.css'
import Link from 'next/link';
export default function Home() {
  // Ref for the target section
  const aboutme = useRef(null);
  const home = useRef(null);
  const skill = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  // Function to handle button click
  const homehandle = () => {
    home.current.scrollIntoView({ behavior: 'smooth' });
  };
  const skillhandle = () => {
    skill.current.scrollIntoView({ behavior: 'smooth' });
  };
  const abouthandle = () => {
    aboutme.current.scrollIntoView({ behavior: 'smooth' });
  };
  const projecthandle = () => {
    project.current.scrollIntoView({ behavior: 'smooth' });
  };
  const contacthandle = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
  };
  // document.addEventListener('DOMContentLoaded', function () {
  //   const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
  //   const mobileMenu = document.getElementById('mobile-menu');

  //   // Initial setup: Ensure the menu is hidden
  //   mobileMenu.classList.add('hidden');

  //   mobileMenuButton.addEventListener('click', function () {
  //     const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  //     // Toggle aria-expanded attribute
  //     mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
  //     // Toggle the 'hidden' class
  //     mobileMenu.classList.toggle('hidden');
  //   });
  // });
  return (
    <>
      <div className="main_container">
        <nav className="nav_bg py-5">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                  className="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo here */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      onClick={homehandle}
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium cursor-pointer text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                    <a
                      onClick={abouthandle}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white"
                    >
                      About
                    </a>
                    <a
                      onClick={skillhandle}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white"
                    >
                      Skill
                    </a>
                    <a
                      onClick={projecthandle}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white"
                    >
                      Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative bg-blue-900 p-2 rounded-lg"
                  onClick={contacthandle}
                >
                  <span className='text-white' >Contact Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div  id="mobile-menu" className={`sm:hidden ${isMenuOpen ? '' : 'hidden'}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                onClick={() => homehandle}
                className="block rounded-md px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </a>
           
              <a onClick={abouthandle} class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">About</a>
              <a onClick={skillhandle} class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Skill</a>
              <a onClick={projecthandle} class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Project</a>
              <div className="sidebars">
          <a href="https://www.linkedin.com/in/mubbashir-ahmad-a32b10231/" target="_blank" className=" linkedin hidden">
            <Image src={img6} alt="LinkedIn" className="icon" />
            <span className="tooltip">LinkedIn</span>
          </a>
          <a href="https://github.com/Mubashir-Ahmad" className="sidebar-items github">
            <Image src={img7} alt="GitHub" className="icon" />
            <span className="tooltip">GitHub</span>
          </a>
          <a onClick={contacthandle} className="sidebar-items email cursor-pointer">
            <Image src={img8} alt="Email" className="icon" />
            <span className="tooltip">Email</span>
          </a>
          <a href="https://drive.google.com/file/d/13nmBhtQDBNQm2KCz5VYbNEvo2B4lAKg_/view?usp=sharing" target="_blank" className=" profile hidden">
            <Image src={img9} alt="Profile" className="icon" />
            <span className="tooltip">Resume</span>
          </a>
        </div>
            </div>
          </div>
        </nav>
        <div ref={home} data-aos="fade-down" className="hero_section  flex items-center justify-center py-20 px-10" >
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="grid gap-10 text-left  py-10 px-5">
              <span className="text-lg  text-red-600 font-serif">Hi, my name is</span>
              <h1 className="md:text-6xl sm:text-2xl text-beckom font-bold font-sans">MUBBASHIR AHMAD SIDDIQUI</h1>
              <span className="md:text-6xl sm:text-2xl leading-50 text-full font-bold font-sans">I'M A Full Stack Developer</span>
              <span className="font-thin text-lg font-serif text-beckom">I’M a full-stack developer specializing in building (and designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.</span>
              <button className="css-button-gradient--5" onClick={projecthandle}>
                View Work
              </button>
            </div>
            <div className="flex justify-center items-center py-20 hidden">
              <Image src={img1} className="my_img" alt="Mubbashir Ahmad Siddiqui" />
            </div>
          </div>
        </div>
        {/* Icons  */}
        <div className="sidebar ">
          <a href="https://www.linkedin.com/in/mubbashir-ahmad-a32b10231/" target="_blank" className="linkedin hidden">
            <Image src={img6} alt="LinkedIn" className="icon" />
            <span className="tooltip">LinkedIn</span>
          </a>
          <a href="https://github.com/Mubashir-Ahmad" className="sidebar-item github">
            <Image src={img7} alt="GitHub" className="icon" />
            <span className="tooltip">GitHub</span>
          </a>
          <a onClick={contacthandle} className="sidebar-item email cursor-pointer">
            <Image src={img8} alt="Email" className="icon" />
            <span className="tooltip">Email</span>
          </a>
          <a href="https://drive.google.com/file/d/13nmBhtQDBNQm2KCz5VYbNEvo2B4lAKg_/view?usp=sharing" target="_blank" className="profile hidden">
            <Image src={img9} alt="Profile" className="icon" />
            <span className="tooltip">Resume</span>
          </a>
        </div>
        {/* About ME */}
        <div ref={aboutme} data-aos="fade-up" data-aos-delay="50" data-aos-duration="900"
          data-aos-easing="ease-in-out" className="hero_section  flex items-center justify-center py-20 px-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="grid gap-10 text-left  py-10 px-5">
              <h2 data-aos="flip-down" data-aos-delay="100" data-aos-duration="1000"
                data-aos-easing="ease-in-out" class="aboutus_heading">ABOUT ME</h2>

              <h1 className="text-3xl text-beckom font-bold font-sans">Hi. I'm Mubbashir Ahmad, nice to meet you. Please take a look around.</h1>
            </div>
            <div data-aos="flip-down" data-aos-delay="100" data-aos-duration="1000"
              data-aos-easing="ease-in-out" className="py-20">
              <span className="text-white text-3x font-sansl">I am a dedicated web developer passionate about crafting engaging online experiences. With a focus on clean code and intuitive design, I specialize in building responsive websites and dynamic web applications. Let's collaborate and bring your digital vision to life.</span>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div ref={skill} data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" className="hero_section flex items-center flex-col justify-center py-20 px-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-80 max-w-7xl">
            <div className="grid gap-10 col-span-1 text-left py-10 ">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <h2 data-aos="flip-down" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" className="skills_heading">Skills</h2>
                <span className="text-white font-serif text-2xl">These are the technologies I've worked with</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img10} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">HTML</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img11} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">CSS</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img12} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">JAVASCRIPT</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={img13} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">BOOTSTRAP</h2>
            </div>
          </div>
          <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="flex flex-col justify-center gap-16 mt-3 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img14} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">TAILWIND</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img15} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">REACT</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img16} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">NEXT.JS</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={img17} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">REDUX</h2>
            </div>
          </div>
          <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="flex flex-col justify-center gap-4  items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img18} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">NODE.JS</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img22} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">EXPRESS</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img23} alt="#" className="w-40" />cat12345
              <h2 className="text-white text-2xl">MONGO-DB</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image src={img25} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">FIREBASE</h2>
            </div>
          </div>
          <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 max-w-7xl">
            <div className="flex flex-col justify-center gap-4  items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img26} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">POST-MAN</h2>
            </div>
            <div className="flex flex-col justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img28} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">AWS</h2>
            </div>
            <div className="flex flex-col justify-center gap-20 mt-5 items-center " data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img27} alt="#" className="w-40" />
              <h2 className="text-white text-2xl">VERCEL</h2>
            </div>
            {/* <div className="flex flex-col justify-center gap-4 items-center">
        <Image   src={img29} alt="#" className="w-40" />
        <h2 className="text-white text-2xl">FIREBASEimport img18 from '../../public/a19.png'</h2>
        </div> */}
          </div>
        </div>
        {/*Projects */}
        <div ref={project} data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" className="hero_section flex items-center flex-col justify-center py-20 px-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-80 max-w-7xl">
            <div className="grid gap-10 col-span-1 text-left py-10 ">
              <div className="flex flex-col items-start justify-start gap-4 w-auto">
                <h2 data-aos="flip-down" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" className="skills_heading">Work</h2>
                <span className="text-white font-serif text-2xl">Check out some of my recent work</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-20 mt-10 max-w-7xl">
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img31} alt="#" className="w-72  rounded-lg" />
              <div className="absolute inset-0  rounded-lg flex flex-col justify-center items-center bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl mb-4 font-mono font-bold">Online Cook Dashboard</h2>
                <div className="flex gap-2 h-10">
                  <a href="https://onlinecookdashboard.netlify.app/" target="_blank" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img32} alt="#" className="w-72  rounded-lg" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl mb-4 font-mono font-bold">Online Cook</h2>
                <div className="flex gap-2 h-10">
                  <a href="https://onlinecooked.netlify.app/" target="_blank" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img33} alt="#" className="w-72  rounded-lg" />
              <div className="absolute inset-0 flex rounded-lg flex-col justify-center items-center bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-xl mb-4 font-mono font-bold">Online Cook Dashboard 2</h2>
                <div className="flex gap-2 h-10">
                  <a href="https://onlineecookdashboard2.netlify.app/" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-20 mt-10 max-w-7xl">
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img34} alt="#" className="w-72 h-48 rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center rounded-lg items-center bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-base mb-4 font-mono font-bold">Full stack finance system</h2>
                <div className="flex gap-2 h-10">
                  <a href="http://34.42.41.161/" target="_blank" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img35} alt="#" className="w-72 h-48 rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl mb-4 font-mono">Fluxora</h2>
                <div className="flex gap-2 h-10">
                  <a href="https://fluxora.netlify.app/" target="_blank" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <Image src={img36} alt="https://serene-shortbread-0e9fbc.netlify.app/" className="w-72 rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center rounded-lg items-center bg-custom-gradient bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl mb-4 font-mono">Travel the world</h2>
                <div className="flex gap-2 h-10">
                  <a href="https://serene-shortbread-0e9fbc.netlify.app/" target="_blank" className="text-black bg-white w-20 h-full flex items-center justify-center text-center rounded-md hover:text-stone-950 transition-colors duration-300"><span className="text-center -font-mono">Live</span> </a>
                  <a href="#" className="text-black bg-white w-20 h-full flex items-center justify-center text-center  rounded-md  hover:text-stone-950 transition duration-700 ease-in-out"><span className="text-center -font-mono">Code</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact me */}
        <div ref={contact} data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" className="hero_section flex items-center flex-col justify-center py-20 px-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1  max-w-7xl">
            <div className="grid gap-10 col-span-1 text-left py-10 ">
              <div className="flex flex-col items-start justify-start gap-4 w-auto">
                <h2 data-aos="flip-down" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" className="skills_heading">Contact</h2>
                <span className="text-white font-serif text-2xl">Send me an email at mubbashirahmad44@gmail.com</span>
                {/* <span className="text-white font-serif text-2xl">Check out some of my recent work</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

