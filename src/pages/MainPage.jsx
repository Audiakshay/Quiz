import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import Footers from '../components/footers';
import Headers from '../components/headers';
import { pageContext } from '../context/pageContext';

function MainPage() {
  const {
    Pages, Option, setOption, QuizData, setQuizData,
  } = useContext(pageContext);
  const loadQuiz = async () => {
    try {
      const res = await fetch('http://localhost:3000/quizData');
      const json = await res.json();
      setQuizData(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadQuiz();
  }, []);
  return (
    <div className="h-screen flex flex-col bg-orange-100">
      <Headers />
      {
        QuizData.map((x) => {
          if (x.id === Pages) {
            return (
              <div className="flex-1 text-center" key={x.id}>
                <p className="text-3xl sm:text-2xl mx-8 my-10 text-blue-900 font-semibold font-sans">{x.title}</p>
                <div className="flex flex-col items-center gap-8">
                  <button
                    type="button"
                    className={clsx('bg-white text-2xl font-sans font-semibold w-96 sm:w-72 sm:text-xl sm:h-14 rounded-md h-20', {
                      'bg-green-500 ring-2 ring-green-500 ring-offset-2': Option === 'A',
                    })}
                    onClick={() => setOption('A')}
                  >
                    <div className="flex px-9 items-center">
                      <p className={clsx('bg-orange-100 px-3 py-1 rounded-full', {
                        'bg-white': Option === 'A',
                      })}
                      >
                        {Option === 'A' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-5 sm:h-7 sm:w-3 fill-green-600 stroke-green-500 stroke-2" viewBox="0 0 900 1200"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg>) : 'A'}
                      </p>
                      <div className="flex-1">
                        {x.A}
                      </div>
                    </div>

                  </button>
                  <button
                    type="button"
                    className={clsx('bg-white text-2xl font-sans font-semibold w-96 sm:w-72 sm:text-xl sm:h-14 rounded-md h-20', {
                      'bg-green-500 ring-2 ring-green-500 ring-offset-2': Option === 'B',
                    })}
                    onClick={() => setOption('B')}
                  >
                    <div className="flex px-9">
                      <p className={clsx('bg-orange-100 px-3 py-1 rounded-full', {
                        'bg-white': Option === 'B',
                      })}
                      >
                        {Option === 'B' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-5 sm:h-7 sm:w-3 fill-green-600 stroke-green-500 stroke-2" viewBox="0 0 900 1200"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg>) : 'B'}

                      </p>
                      <div className="flex-1">
                        {x.B}
                      </div>
                    </div>

                  </button>
                  <button
                    type="button"
                    className={clsx('bg-white text-2xl font-sans font-semibold w-96 sm:w-72 sm:text-xl sm:h-14 rounded-md h-20', {
                      'bg-green-500 ring-2 ring-green-500 ring-offset-2': Option === 'C',
                    })}
                    onClick={() => setOption('C')}
                  >
                    <div className="flex px-9">
                      <p className={clsx('bg-orange-100 px-3 py-1 rounded-full', {
                        'bg-white': Option === 'C',
                      })}
                      >
                        {Option === 'C' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-5 sm:h-7 sm:w-3 fill-green-600 stroke-green-500 stroke-2" viewBox="0 0 900 1200"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg>) : 'C'}

                      </p>
                      <div className="flex-1">
                        {x.C}
                      </div>
                    </div>

                  </button>
                  <div />
                  <div />
                </div>
              </div>
            );
          }
          return null;
        })
      }
      <Footers />
    </div>
  );
}

export default MainPage;
