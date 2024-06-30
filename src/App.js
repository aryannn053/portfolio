import GitHubCalendar from 'react-github-calendar';
// import useSmoothScroll from './useSmoothScroll'; 

import avatar from './avatar.jpg';
import './App.css';

import credio from './credio.jpg';
import image from './image.png';

import image_2 from './image_2.png';
import image_3 from './image_3.png';

import image_4 from './image_4.png';
import image_5 from './image_5.png';


function App() {
  return (
    <div className="mx-auto md:max-w-lg lg:max-w-4xl px-14">
      <section className="hero">
        <nav className="bg-white border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 pt-16">
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 flex-wrap" id="navbar-cta">
              <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:justify-center">
                <li>
                  <a href="#experience" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 text-center navbar-heading">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Projects</a>
                </li>
                <li>
                  <a href="#achievements" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Achievements</a>
                </li>
                <li>
                  <a href="#skills" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Skills</a>
                </li>
                <li>
                  <a href="#miscellaneous" className="block py-2 px-3 md:p-0 hover:text-gray-400 rounded dark:text-gray-600 md:text-gray-600 sm:text-gray-600 navbar-heading text-center">Miscellaneous</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="pt-10 justify-start">
          <img src={avatar} className="rounded-full grayscale hover:grayscale-0" width="96"/>

          <p className="pt-5 custom-font">Badri Vishal Mani Tripathi</p>
          <p className="font-dis">Competitive Programming • Frontend Development</p>

          <p className="pt-6 whytho text-gray-600">
            A 13 year old doing competitive programming and frontend development. I've been doing competitive programming and web dev from the past 5 years. Welcome to my portfolio, here you will find everything I've done in my professional life.
          </p>

          <div className="flexbox-custom md:gap-16 pt-8">
            <a href="https://mailto:aryannn053@gmail.com" className="wahatag">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path><path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path></svg>
              Contact Me
            </a>
            <a href="https://github.com/aryannn053" className="wahatag">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/badri-vishal" className="wahatag">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
              LinkedIn
            </a>
            <a href="https://x.com/aryantri13" className="wahatag">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg>
              Twitter
            </a>
          </div>

          <div className="pt-12">
            <hr/>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="pt-12">
              <p className="custom-font-2">Experience</p>

              <div className="pt-0">
                <div className="experience-flex">
                  <img src={credio} className="grayscale hover:grayscale-0 rounded-full" width="50" height="50"/>

                  <div className="pt-0">
                    <h1>Crediometer</h1>
                    <p className="yewala">Frontend Developer Internship</p>
                  </div>
                  <div>
                    <p className="text-gray-600 whytho">Created multiple web pages for Crediometer using React JS and Bootstrap CSS. This internship was around 4 months long and I learned many new skills and lessons.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 pb-12">
              <hr/>
            </div>
      </section>

      <section id="projects">
        <h1 className="custom-font-2 pb-8">Projects</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• Amazon Clone</h1>
            <p className="whytho pt-1 text-gray-600">A simple and clean amazon clone built using React JS. Firebase is used for authentication and database. </p>
            

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href="https://clone-52f9c.web.app" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path><path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path></svg>
                Try it now!
              </a>

              <a href="https://github.com/aryannn053/amazon" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img src={image} className="rounded grayscale hover:grayscale-0" width="300"/>
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-12">
          <div>
            <h1 className="wahre">• Quotes Generator</h1>
            <p className="whytho pt-1 text-gray-600">A quote generator app written in Python. It generates quote on a random or on a given topic using QuoteAPI.</p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href="https://github.com/aryannn053/quoteapi" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img src={image_2} className="rounded grayscale hover:grayscale-0" width="400"/>
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-12">
          <div>
            <h1 className="wahre">• Todo List</h1>
            <p className="whytho pt-1 text-gray-600">A minimalistic todo list app which is easy and comfortable to use. This app is built using Flask, Bootstrap CSS and Flask SQL Alchemy.</p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href="https://github.com/MrBlueBird2/to-do-list-flask" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img src={image_3} className="rounded grayscale hover:grayscale-0" width="400"/>
          </div>
        </div>

        <h1 className="baharmil text-center pb-5 pt-8">GitHub Contributions</h1>
        <GitHubCalendar username="aryannn053" year="2024" colorScheme='light'/>

        <div className="pt-12 pb-12">
          <hr/>
        </div>
      </section>

      <section id="achievements">
        <h1 className="custom-font-2 pb-8">Achievements</h1>

        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• CodeChef</h1>
            <p className="whytho pt-1 text-gray-600">After few months of grinding problems and learning new algorithms and stuff, I finally reached 1437 rating on codechef.</p>
            

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href="https://codechef.com/users/aryant053" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path><path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path></svg>
                View Profile
              </a>
            </div>
          </div>
          <div className="px-10">
            <img src={image_4} className="rounded grayscale hover:grayscale-0" width="300"/>
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• LeetCode</h1>
            <p className="whytho pt-1 text-gray-600">Started my grind for leetcode on 2nd May, Solved 450 Problems by June 23rd.</p>
            

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href="https://leetcode.com/aryantripathi05" className="wahatag pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path><path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path></svg>
                View Profile
              </a>
            </div>
          </div>
          <div className="px-10">
            <img src={image_5} className="rounded grayscale hover:grayscale-0" width="300"/>
          </div>
        </div>
      </section>
      <div className="pb-12">
        <hr/>
      </div>

      <section className="skills">
        <h1 className="custom-font-2 pb-6">Skills</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2">
          <div>
            <h1 className="wahre">Programming Languages</h1>
            <ol className="whytho text-gray-600 pt-2 pb-5">
              <li>HTML CSS</li>
              <li>Python</li>
              <li>CPP</li>
              <li>Javascript</li>
            </ol>
            <br/>

            <h1 className="wahre">Tools</h1>
            <ul className="whytho text-gray-600 pt-2 pb-5">
              <li>Figma</li>
              <li>Linux</li>
              <li>Git</li>
              <li>VS Code </li>
            </ul>
          </div>
          <div>
            <h1 className="wahre">Libraries/Frameworks</h1>
              <ol className="whytho text-gray-600 pt-2 pb-5">
                <li>Bootstrap CSS</li>
                <li>Flask</li>
                <li>React JS</li>
                <li>Tailwind CSS</li>
              </ol>
              <br/>

              <h1 className="wahre">Others</h1>
              <ul className="whytho text-gray-600 pt-2 pb-5">
                <li>Web Development</li>
                <li>Problem Solving</li>
                <li>Data Structures and Algorithms</li>
                <li>UI/UX Design</li>
              </ul>
          </div>
        </div>
      </section>

      <div className="pt-6 pb-12">
        <hr/>
      </div>

      <section id="miscellaneous">
        <h1 className="custom-font-2">Miscellaneous</h1>
        <br/>
        <iframe src="https://open.spotify.com/embed/playlist/4jV01hXepOfgciBEEf7bCw?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </section>

      <div className="pt-12 pb-12">
        <hr/>
      </div>

      <p className="whytho text-gray-600 text-center pb-12">© Aryan Tripathi | {(new Date().getFullYear())}</p>
    </div>
  );
}

export default App;
