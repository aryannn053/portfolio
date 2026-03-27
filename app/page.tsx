"use client";

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

// Next.js handles images differently. 
// If these are in your /public folder, use strings like "/avatar.jpg"
// If they are in /src/assets, keep these imports:
import avatar from './assets/avatar.jpg';
import credio from './assets/credio.jpg';
import image from './assets/image.png';
import image_2 from './assets/image_2.png';
import image_3 from './assets/image_3.png';
import image_4 from './assets/image_4.png';
import image_5 from './assets/image_5.png';

// Ensure your global styles (Tailwind, etc.) are imported in layout.tsx
import './globals.css'; 

export default function Home() {
  return (
    <div className="mx-auto px-14 md:max-w-lg lg:max-w-4xl">
      <section className="hero">
        <nav className="border-gray-200 bg-white">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4 pt-16">
            <div className="w-full flex-wrap items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-cta">
              <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium sm:flex-row sm:flex-wrap sm:justify-center md:mt-0 md:flex-row md:justify-center md:space-x-16 md:p-0 rtl:space-x-reverse">
                <li><a href="#experience" className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600">Experience</a></li>
                <li><a href="#projects" className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600">Projects</a></li>
                <li><a href="#achievements" className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600">Achievements</a></li>
                <li><a href="#skills" className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600">Skills</a></li>
                <li><a href="#miscellaneous" className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600">Miscellaneous</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="justify-start pt-10">
          <img src={avatar.src} className="rounded-full image-avatar grayscale hover:grayscale-0" alt="Avatar" />
          <p className="custom-font pt-5">Badri Vishal Mani Tripathi</p>
          <p className="font-dis">Competitive Programming • Frontend Development</p>
          <p className="whytho pt-6 text-gray-600">
            A 14 year old doing competitive programming and frontend development...
          </p>

          <div className="flexbox-custom pt-8 md:gap-16">
            {/* Social Links - Simplified for brevity */}
            <a href="mailto:aryannn053@gmail.com" className="wahatag">Contact Me</a>
            <a href="https://github.com/aryannn053" className="wahatag">GitHub</a>
            <a href="https://linkedin.com/in/badri-v" className="wahatag">LinkedIn</a>
          </div>
          <div className="pt-12"><hr /></div>
        </div>
      </section>

      <section id="experience">
        <div className="pt-12">
          <p className="custom-font-2">Experience</p>
          {/* Oreon Project */}
          <div className="experience-flex">
            <img src="/oreon.png" className="rounded-full grayscale hover:grayscale-0" width="50" height="50" alt="Oreon" />
            <div className="pt-0">
              <div className='skills-flex'>
                <h1>Oreon Project</h1>
                <p className='pt-1 experience-skill custom-pad'>Jul 2024 - Present</p>
              </div>
              <p className="yewala">Web Developer</p>
              <p className="whytho text-gray-600">Part of the marketing and web development team.</p>
            </div>
          </div>
          {/* ... Other experience items ... */}
          <div className="experience-flex pt-4">
            <img src={credio.src} className="rounded-full grayscale hover:grayscale-0" width="50" height="50" alt="Credio" />
            <div>
              <div className='skills-flex'><h1>Crediometer</h1><p className='pt-1 experience-skill'>Sep 2021 - Jan 2022</p></div>
              <p className="yewala">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="pb-12 pt-12"><hr /></div>
      </section>

      <section id="projects">
        <h1 className="custom-font-2 pb-8">Projects</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• Amazon Clone</h1>
            <p className="whytho pt-1 text-gray-600">Built using React JS and Firebase.</p>
            <a href="https://clone-52f9c.web.app" className="wahatag pt-4">Try it now!</a>
          </div>
          <div className="px-10">
            <img src={image.src} className="rounded grayscale hover:grayscale-0 pro-image" width="300" alt="Amazon project" />
          </div>
        </div>
        {/* GitHub Calendar */}
        <h1 className="baharmil pb-5 pt-8 text-center">GitHub Contributions</h1>
        <GitHubCalendar username="aryannn053" year={2024} colorScheme="light" />
        <div className="pb-12 pt-12"><hr /></div>
      </section>

      <section id="achievements">
        <h1 className="custom-font-2 pb-8">Achievements</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• CodeChef</h1>
            <p className="whytho pt-1 text-gray-600">Reached 1437 rating.</p>
          </div>
          <div className="px-10">
            <img src={image_4.src} className="rounded grayscale hover:grayscale-0 pro-image" width="300" alt="CodeChef" />
          </div>
        </div>
      </section>

      <section id="skills">
        <h1 className="custom-font-2 pb-6">Skills</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2">
          <div>
            <h1 className="wahre">Programming Languages</h1>
            <ul className="whytho text-gray-600">
              <li>Python, Java, CPP, Javascript</li>
            </ul>
          </div>
          <div>
            <h1 className="wahre">Frameworks</h1>
            <ul className="whytho text-gray-600">
              <li>React JS, Next JS, Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="miscellaneous" className="pt-12">
        <h1 className="custom-font-2">Miscellaneous</h1>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E37j9z9z9z9z9" 
          width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        ></iframe>
      </section>

      <footer className="pb-12 pt-12">
        <hr />
        <p className="whytho pt-8 text-center text-gray-600">
          © Aryan Tripathi | {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}