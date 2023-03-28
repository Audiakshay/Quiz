import React, { useContext } from 'react';
import Footers from '../components/footers';
import Headers from '../components/headers';
import { pageContext } from '../context/pageContext';

function Result() {
  const { result, Prediction } = useContext(pageContext);
  return (
    <div className="flex flex-col w-full h-screen bg-orange-100">
      <Headers />
      <div className="flex-col flex-1">
        <div className="flex flex-col items-center">
          <svg width="298" height="224" viewBox="0 0 298 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M195.743 68.3608H98.938V152.049H195.743V68.3608Z" fill="url(#paint0_linear_14_530)" />
            <path d="M193.689 70.4233V149.986H101V70.4233H193.689ZM197.814 66.2983H96.8755V154.111H197.814V66.2983Z" fill="#F0EBE6" />
            <path d="M101 110.205H173.6" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M179.178 3L77 47.8954L87.6066 72.035L189.784 27.1396L179.178 3Z" fill="url(#paint1_linear_14_530)" stroke="#F0EBE6" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M193.417 130.03C204.366 130.03 213.242 121.154 213.242 110.205C213.242 99.2559 204.366 90.3801 193.417 90.3801C182.468 90.3801 173.592 99.2559 173.592 110.205C173.592 121.154 182.468 130.03 193.417 130.03Z" fill="#F0EBE6" stroke="url(#paint2_linear_14_530)" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M193.417 100.239V120.171" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M203.391 110.205H183.451" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M127.805 93.2263C130.28 95.7013 135.725 110.205 135.725 110.205C135.725 110.205 121.246 104.785 118.746 102.285C118.15 101.689 117.678 100.982 117.355 100.203C117.033 99.4245 116.867 98.59 116.867 97.7473C116.867 96.9046 117.033 96.0702 117.355 95.2917C117.678 94.5131 118.15 93.8057 118.746 93.2098C119.95 92.0064 121.582 91.3303 123.284 91.3303C124.127 91.3303 124.961 91.4963 125.739 91.8188C126.518 92.1413 127.225 92.614 127.821 93.2098L127.805 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M143.645 93.2263C141.17 95.7013 135.725 110.205 135.725 110.205C135.725 110.205 150.204 104.785 152.703 102.285C153.299 101.689 153.772 100.982 154.094 100.203C154.417 99.4245 154.583 98.59 154.583 97.7473C154.583 96.9046 154.417 96.0702 154.094 95.2917C153.772 94.5131 153.299 93.8057 152.703 93.2098C152.107 92.614 151.4 92.1413 150.621 91.8188C149.843 91.4963 149.008 91.3303 148.166 91.3303C147.323 91.3303 146.489 91.4963 145.71 91.8188C144.932 92.1413 144.224 92.614 143.628 93.2098L143.645 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M127.557 127.711L135.725 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M143.892 127.711L135.725 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
            <path d="M205.858 64.4173L204.513 71.9413C204.47 72.1358 204.362 72.3097 204.207 72.4344C204.052 72.5591 203.859 72.627 203.659 72.627C203.46 72.627 203.267 72.5591 203.112 72.4344C202.957 72.3097 202.849 72.1358 202.806 71.9413L201.238 64.4586C200.892 62.5856 200.012 60.8523 198.706 59.4665C197.399 58.0808 195.72 57.1014 193.871 56.6458L186.619 55.0701C186.444 55.0141 186.292 54.904 186.183 54.7558C186.075 54.6075 186.017 54.4287 186.017 54.2451C186.017 54.0615 186.075 53.8827 186.183 53.7344C186.292 53.5861 186.444 53.4761 186.619 53.4201L193.821 51.6298C195.656 51.1164 197.304 50.0844 198.567 48.6576C199.83 47.2308 200.654 45.4698 200.941 43.5861L202.286 36.0703C202.329 35.8759 202.437 35.702 202.592 35.5773C202.747 35.4526 202.941 35.3846 203.14 35.3846C203.339 35.3846 203.532 35.4526 203.687 35.5773C203.842 35.702 203.951 35.8759 203.994 36.0703L205.561 43.5531C205.906 45.4276 206.784 47.1626 208.091 48.55C209.398 49.9373 211.078 50.9179 212.928 51.3741L220.18 52.9416C220.355 52.9976 220.507 53.1076 220.616 53.2559C220.724 53.4042 220.782 53.583 220.782 53.7666C220.782 53.9502 220.724 54.129 220.616 54.2773C220.507 54.4255 220.355 54.5356 220.18 54.5916L212.978 56.3901C211.145 56.9023 209.499 57.9319 208.236 59.3555C206.973 60.7792 206.148 62.5366 205.858 64.4173Z" fill="url(#paint3_linear_14_530)" />
            <defs>
              <linearGradient id="paint0_linear_14_530" x1="128.234" y1="162.708" x2="166.456" y2="57.6936" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1F71" />
                <stop offset="0.06" stopColor="#313A85" />
                <stop offset="0.14" stopColor="#51609F" />
                <stop offset="0.24" stopColor="#6D80B7" />
                <stop offset="0.34" stopColor="#839AC9" />
                <stop offset="0.46" stopColor="#95AFD8" />
                <stop offset="0.59" stopColor="#A1BDE2" />
                <stop offset="0.74" stopColor="#A8C5E8" />
                <stop offset="1" stopColor="#AAC8EA" />
              </linearGradient>
              <linearGradient id="paint1_linear_14_530" x1="126.105" y1="78.8275" x2="140.674" y2="-3.78799" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A1F71" />
                <stop offset="0.06" stopColor="#313A85" />
                <stop offset="0.14" stopColor="#51609F" />
                <stop offset="0.24" stopColor="#6D80B7" />
                <stop offset="0.34" stopColor="#839AC9" />
                <stop offset="0.46" stopColor="#95AFD8" />
                <stop offset="0.59" stopColor="#A1BDE2" />
                <stop offset="0.74" stopColor="#A8C5E8" />
                <stop offset="1" stopColor="#AAC8EA" />
              </linearGradient>
              <linearGradient id="paint2_linear_14_530" x1="189.622" y1="131.762" x2="197.22" y2="88.6476" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F8654" />
                <stop offset="0.02" stopColor="#1F8C55" />
                <stop offset="0.16" stopColor="#21A65B" />
                <stop offset="0.3" stopColor="#23BA60" />
                <stop offset="0.47" stopColor="#24C863" />
                <stop offset="0.67" stopColor="#25D065" />
                <stop offset="1" stopColor="#25D366" />
              </linearGradient>
              <linearGradient id="paint3_linear_14_530" x1="200.199" y1="72.0568" x2="206.576" y2="35.9301" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F8654" />
                <stop offset="0.02" stopColor="#1F8C55" />
                <stop offset="0.16" stopColor="#21A65B" />
                <stop offset="0.3" stopColor="#23BA60" />
                <stop offset="0.47" stopColor="#24C863" />
                <stop offset="0.67" stopColor="#25D065" />
                <stop offset="1" stopColor="#25D366" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-2xl font-sans font-bold sm:text-xl">Results of Fantasy Quiz #156</p>
        </div>
        <div className=" my-8 flex flex-col items-center">
          <div className="flex items-center px-4 rounded-t-md w-96 bg-white h-20 sm:h-12 text-xl sm:text-sm sm:w-72 font-sans border-b-2 font-semibold gap-3">
            <div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#EDE8E3" />
                <path d="M27.34 20.17C17.17 20.17 17.17 22.807 7 22.807V12.637C17.17 12.637 17.17 10 27.34 10V20.17Z" fill="#F0EBE6" stroke="url(#paint0_linear_14_448)" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M29.5516 22.3615C19.3816 22.3615 19.3816 25 9.21161 25V14.83C19.3816 14.83 19.3816 12.1916 29.5516 12.1916V22.3615Z" fill="url(#paint1_linear_14_448)" />
                <path d="M19.3801 20.9363C20.6728 20.9363 21.7207 19.8884 21.7207 18.5958C21.7207 17.3031 20.6728 16.2552 19.3801 16.2552C18.0875 16.2552 17.0396 17.3031 17.0396 18.5958C17.0396 19.8884 18.0875 20.9363 19.3801 20.9363Z" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M9.20874 22.6595C9.51665 22.6587 9.82169 22.7187 10.1064 22.836C10.3911 22.9532 10.6499 23.1255 10.868 23.3429C11.086 23.5603 11.2591 23.8185 11.3772 24.1029C11.4953 24.3872 11.5562 24.6921 11.5564 25" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M27.211 22.3472C27.2133 21.728 27.4609 21.1348 27.8996 20.6978C28.3382 20.2607 28.9323 20.0153 29.5515 20.0153" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M29.5515 14.5307C28.9308 14.5307 28.3355 14.2841 27.8965 13.8451C27.4576 13.4062 27.211 12.8109 27.211 12.1901" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <path d="M11.5564 14.883C11.5562 15.1909 11.4953 15.4957 11.3772 15.7799C11.259 16.0642 11.0859 16.3224 10.8679 16.5396C10.6498 16.7569 10.391 16.929 10.1063 17.0462C9.82159 17.1633 9.51658 17.2231 9.20874 17.2221" stroke="#F0EBE6" strokeWidth="0.716196" strokeMiterlimit="10" />
                <defs>
                  <linearGradient id="paint0_linear_14_448" x1="6.63904" y1="16.4028" x2="27.6981" y2="16.4028" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1F8654" />
                    <stop offset="0.02" stopColor="#1F8C55" />
                    <stop offset="0.16" stopColor="#21A65B" />
                    <stop offset="0.3" stopColor="#23BA60" />
                    <stop offset="0.47" stopColor="#24C863" />
                    <stop offset="0.67" stopColor="#25D065" />
                    <stop offset="1" stopColor="#25D366" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_14_448" x1="17.9778" y1="26.5456" x2="20.7825" y2="10.6446" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1F8654" />
                    <stop offset="0.02" stopColor="#1F8C55" />
                    <stop offset="0.16" stopColor="#21A65B" />
                    <stop offset="0.3" stopColor="#23BA60" />
                    <stop offset="0.47" stopColor="#24C863" />
                    <stop offset="0.67" stopColor="#25D065" />
                    <stop offset="1" stopColor="#25D366" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="flex-1 px-4">SCORE GAINED</div>
            <div className="font-bold">{result}</div>
          </div>
          <div className="flex items-center px-4 bg-white w-96 rounded-b-md h-20 sm:h-12 sm:text-sm sm:w-72 text-xl font-sans font-semibold gap-3">
            <div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#EDE8E3" />
                <path d="M24.71 13.21C24.617 13.1163 24.5064 13.0419 24.3846 12.9911C24.2627 12.9403 24.132 12.9142 24 12.9142C23.868 12.9142 23.7373 12.9403 23.6154 12.9911C23.4936 13.0419 23.383 13.1163 23.29 13.21L15.84 20.67L12.71 17.53C12.6135 17.4368 12.4995 17.3634 12.3747 17.3142C12.2498 17.265 12.1165 17.2409 11.9823 17.2432C11.8482 17.2456 11.7157 17.2743 11.5927 17.3278C11.4696 17.3813 11.3582 17.4585 11.265 17.555C11.1718 17.6515 11.0985 17.7655 11.0493 17.8903C11.0001 18.0152 10.9759 18.1485 10.9782 18.2827C10.9806 18.4169 11.0093 18.5493 11.0628 18.6723C11.1163 18.7954 11.1935 18.9068 11.29 19L15.13 22.84C15.223 22.9337 15.3336 23.0081 15.4554 23.0589C15.5773 23.1097 15.708 23.1358 15.84 23.1358C15.972 23.1358 16.1027 23.1097 16.2246 23.0589C16.3464 23.0081 16.457 22.9337 16.55 22.84L24.71 14.68C24.8115 14.5864 24.8925 14.4727 24.9479 14.3462C25.0033 14.2197 25.0319 14.0831 25.0319 13.945C25.0319 13.8069 25.0033 13.6703 24.9479 13.5438C24.8925 13.4173 24.8115 13.3036 24.71 13.21Z" fill="#26D266" stroke="#26D166" />
              </svg>
            </div>
            <div className="flex-1 px-4">CORRECT PREDICTIONS</div>
            <div className="font-bold">{Prediction}</div>
          </div>

        </div>
      </div>
      <Footers />
    </div>
  );
}

export default Result;
