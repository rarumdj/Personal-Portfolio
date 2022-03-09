import React from 'react'
import { bootstrap, css, figma, git, html, jsimg, laravel, nodejs, php, reactimg, reduxjs, tailwind } from "../assests";

const Skills = () => {
  return (
    <div className="w-full flex justify-center flex-wrap">
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-orange-100">
                  <img src={html} alt="html" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={css} alt="css" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={reactimg} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={jsimg} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={reduxjs} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={git} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={figma} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={php} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={laravel} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={nodejs} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={tailwind} alt="react" className="m-auto" />
                </div>
              </div>
              <div class="p-4 sm:w-1/3">
                <div className="flex h-20 w-20 rounded-full bg-blue-50">
                  <img src={bootstrap} alt="react" className="m-auto" />
                </div>
              </div>
          </div>
  )
}

export default Skills