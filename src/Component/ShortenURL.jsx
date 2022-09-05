import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
const ShortenURL = () => {
  const [shortenedLink, setShortenedLink] = useState('');
  const [userInput, setUserInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`,
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          width: '80%',
          margin: 'auto',
          padding: '1em',
          marginTop: '1em',
        }}>
        <h1 className=' text-2xl font-medium text-teal-500 mb-4'>
          Our <span className=' text-red-400'>URL Shortener</span>
        </h1>
        <div className='flex justify-center items-center'>
          <div className=' text-center'>
            <div>
              <input
                className='outline-none border-2 border-teal-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3'
                type='text'
                placeholder='Enter link to be shortened'
                value={userInput}
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              />
              <button
                className='bg-teal-500 text-white px-8 py-3 ml-4 rounded-md'
                onClick={() => {
                  fetchData();
                }}>
                Submit URL
              </button>
              <div className=' mt-5'>
                <button className='border-2 border-teal-500 text-teal-600 font-medium px-5 py-2 ml-4 rounded-md'>
                  {shortenedLink}
                </button>

                <CopyToClipboard text={shortenedLink}>
                  <button className=' bg-teal-500 text-white px-8 py-3 ml-4 rounded-md'>
                    Copy URL to Clipboard
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop:'30em',}}>
       <h1> Made by Karina :-)</h1>
      </div>
    </div>
  );
};

export default ShortenURL;
