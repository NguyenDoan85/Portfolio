import React from "react";
import resort from "../assets/portfolio/resort.png";
import mvc from "../assets/portfolio/mvc.png";
import ultimatecocktail from "../assets/portfolio/ultimatecocktail.jpg";
import travelerforecast from "../assets/portfolio/travelerforecast.jpg";
import notetaker from "../assets/portfolio/notetaker.jpg";
import quiz from "../assets/portfolio/quiz.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: resort,
      link: 'https://thaihoamuineresort.herokuapp.com/',
      repo: 'https://github.com/NguyenDoan85/Resort---Project-2'
    },
    {
      id: 2,
      src: notetaker,
      link: 'https://whispering-dusk-10136.herokuapp.com/',
      repo: 'https://github.com/NguyenDoan85/NOTEPAD'
    },
    {
      id: 3,
      src: mvc,
      link: 'https://mcv-blog.herokuapp.com/',
      repo: 'https://github.com/NguyenDoan85/MVC-BLOG'
    },
    {
      id: 4,
      src: quiz,
      link: 'https://nguyendoan85.github.io/A-litle-code-quiz/',
      repo: 'https://github.com/NguyenDoan85/A-litle-code-quiz'
    },
    {
      id: 5,
      src: travelerforecast,
      link: 'https://nguyendoan85.github.io/Traveler-Forecast/',
      repo: 'https://github.com/NguyenDoan85/Traveler-Forecast'
    },
    {
      id: 6,
      src: ultimatecocktail,
      link: 'https://nguyendoan85.github.io/Ultimate-Cocktail-Page/',
      repo: 'https://github.com/NguyenDoan85/Ultimate-Cocktail-Page'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work during my bootcamp</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;