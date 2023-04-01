import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageContext } from '../../context/pageContext';

function Footers() {
  const nav = useNavigate();
  const nav1 = useNavigate();
  const {
    innerwidth, setPages, Pages, Option, setOption, checkResult, setresult,
  } = useContext(pageContext);
  console.log(Pages);
  const pageCount = () => {
    if (Pages <= 5) {
      setPages(Pages + 1);
    }
  };
  const footerButton = () => { 
    if (Pages === 6) { nav1('/', { replace: true }); 
    setPages(1); setresult(0); } 
    pageCount(); 
    checkResult(); 
    setOption(''); 
    if (Pages === 5) { nav('/result', { replace: true }); } }
  return (
    <div className="flex justify-center py-5 gap-16 sm:gap-0 sm:bg-orange-100 bg-white">
      <div className="flex items-center">
        {(innerwidth > 700 && Pages < 6) && (
          <>
            <div className="">
              <div className="bg-slate-500 h-3 w-72 rounded-lg">
                <div
                  className="bg-green-500 h-3 rounded-lg"
                  style={{ width: 57.6 * Pages }}
                />
              </div>
            </div>
            <div>
              {Pages}
              /5
            </div>
          </>
        )}
      </div>
      <div>
        <button disabled={!(Option || Pages === 6)} type="button" className="btn disabled:ring-2 disabled:ring-slate-500 disabled:ring-offset-2 ring-2 ring-green-500 ring-offset-2" onClick={footerButton}>
          {Pages < 5 ? 'Submit' : (Pages === 6 ? 'Okay' : 'Finish') }
        </button>
      </div>
    </div>
  );
}

export default Footers;
