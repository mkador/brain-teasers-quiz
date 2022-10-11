import React from 'react';


const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          Others Activities
        </h2>
        <p className="text-base text-amber-900 md:text-lg">
        According to a recent survey done by Ipsos, 48% of adults enjoy puzzles and puzzle games. 59% of people said that it was relaxing, and 42% felt that a puzzle was giving their brain a boost
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5  text-amber-900">
            Problem solving skills Quiz
            </h6>
            <p className="text-sm text-gray-900">
            Looking for patterns and making logical choices is one of the many ways that we would approach a puzzle game. We would do the same thing if we were completing a wordsearch or Sudoku puzzle. 
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5  text-amber-900 ">
            Memory and reasoning Quiz
            </h6>
            <p className="text-sm text-gray-900">
            According to research published in the book How Puzzles Improve Your Brain: The Surprising Science of the Playful Brain by Richard Restak, puzzles are extremely good for improving your visual and spatial reasoning skills
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5  text-amber-900">
            Improving your mood Quiz
            </h6>
            <p className="text-sm text-gray-900">
            One of the main reasons we enjoy puzzle games is that it improves our mood. Doing a puzzle actually produces dopamine in the brain, giving us feelings of happiness. Dopamine is an essential neurotransmitter that regulates our memory and mood, and also helps us to concentrate. 
            </p>
          </div>
        </div>
      </div>
    </div>);
};

export default About;