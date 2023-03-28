import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

export const pageContext = createContext();

function PageProvider({ children }) {
  const [QuizData, setQuizData] = useState([]);
  const [innerwidth, setinnerwidth] = useState(window.innerWidth);
  const [Pages, setPages] = useState(1);
  const [Option, setOption] = useState('');
  const [result, setresult] = useState(0);
  const [Prediction, setPrediction] = useState(0);
  const checkResult = useCallback(() => {
    if (Pages < 6 && QuizData[Pages - 1].answer === Option) {
      setresult(result + 30);
      setPrediction(Prediction + 1);
    }
  });
  const resize = useCallback((size) => {
    setinnerwidth(size);
  });

  window.addEventListener('resize', () => resize(window.innerWidth));

  const val = useMemo(
    () => ({
      innerwidth,
      setinnerwidth,
      resize,
      Pages,
      setPages,
      Option,
      setOption,
      result,
      setresult,
      QuizData,
      setQuizData,
      checkResult,
      Prediction,
    }),
    [innerwidth, setinnerwidth, resize, Pages, setPages,
      Option, setOption, setresult, result, QuizData, setQuizData, checkResult, Prediction],
  );

  return (
    <pageContext.Provider value={val}>{children}</pageContext.Provider>
  );
}

export default PageProvider;
