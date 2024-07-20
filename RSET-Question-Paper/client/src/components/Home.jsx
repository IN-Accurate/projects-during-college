// import Navbar from './Navbar';
import '../styles/home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function Home() {
  const [text, setText] = useState('');
  const fullText = 'Enter the subject name in lowercase letters!';

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === fullText) {
          clearInterval(interval);
          return fullText;
        }
        return fullText.slice(0, prevText.length + 1);
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showLoginAsAdmin, setShowLoginAsAdmin] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchFound, setSearchFound] = useState(false);
  const navigate = useNavigate();

  let temp = [];

  const handleSearchChange = (event) => {
    if (event.target.value === '') {
      setSearchText(event.target.value);
      setSuggestions('');
      temp = [];
      return;
    }
    setSuggestions(temp);
    setSearchText(event.target.value);

    setSearchFound(false);
    if (!searchFound) {
      axios.get('http://localhost:3002/questionpaper').then((response) => {
        var k = 0;
        for (var i = 0; i < response.data.length; i++) {
          if (
            response.data[i].subject_name
              .toLowerCase()
              .startsWith(event.target.value.toLowerCase())
          ) {
            console.log(searchText);
            temp[k++] = response.data[i].subject_name;
          }
        }
        setSuggestions(temp);
        setSearchFound(true);
      });
    }
  };

  const searchListClick = (param) => {
    // Handle when a suggestion is clicked
    // You can navigate or perform other actions here
  };

  const handleUserIconClick = () => {
    setShowLoginAsAdmin(!showLoginAsAdmin);
  };

  const openPDF = (suggestion) => {
    const pdfPath = `http://localhost:3002/files/${suggestion}.pdf`;

    window.open(pdfPath, '_blank');
  };
  const handleLoginAsAdminClick = () => {
    navigate('/login');
  };
  const handleSearchButtonClick = () => {
    setSearchInitiated(true);
    // Implement your logic to fetch and display search results here
    // You can update the 'suggestions' state with the search results
  };

  return (
    <div className='bg-customcolor-bg min-h-screen flex flex-col items-center justify-center'>
      {searchInitiated ? (
        // Display search bar at the top

        <div className='search-btn-clicked-div'>
          <div className='searchbar-close flex items-center space-x-4 mb-8 fixed top-0 left-20 right-0 bg-customcolor-bg  p-4 z-10'>
            <div className='flex items-center bg-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'>
              <input
                type='text'
                placeholder='Search...'
                value={searchText}
                onChange={handleSearchChange}
                className='searchInput w-full focus:outline-none text-xl '
              />
              <FaSearch className='text-gray-500' />
            </div>
            <button
              className='ml-4 bg-blue-500 text-white px-2 py-1 rounded-md'
              onClick={() => setSearchInitiated(false)}
            >
              Close
            </button>
          </div>{' '}
          {searchFound && suggestions.length > 0 && (
            <div className='pdfs-container rounded-3xl px-10 py-10'>
              {suggestions.map((suggestion, index) => (
                <div
                  className='searchlist-names'
                  key={index}
                  onClick={() => {
                    openPDF(suggestion);
                  }}
                >
                  <div className='pdf-content-container'>{suggestion}</div>
                  <div>
                    <button
                      className='open-pdf-btn'
                      onClick={() => {
                        openPDF(suggestion);
                      }}
                    >
                      Show PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Display search bar in the center
        <div className='flex-column items-center w-300'>
          <div className='text-black text-3xl pl-4 text-bold'>{text}</div>
          <div className='flex items-center -mr-3 bg-customcolor-bg2 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={handleSearchChange}
              className='searchInput w-full focus:outline-none text-white text-xl py-2 px-4 bg-customcolor-bg2' // Adjusted padding and width
            />
            <FaSearch
              className='text-white '
              onClick={handleSearchButtonClick}
              size={50}
            />
          </div>
        </div>
      )}
      {!searchInitiated && searchFound && suggestions.length > 0 && (
        <div className='search-focus '>
          <ul className='search-suggestions'>
            {suggestions.map((suggestion, index) => (
              <li
                className='searchlist'
                key={index}
                onClick={() => {
                  openPDF(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='flex items-center absolute top-1 right-2'>
        <button
          className='bg-blue-500 text-white px-2 py-1 mt-2 rounded-md'
          onClick={handleLoginAsAdminClick}
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}

export default Home;
/*

 {temp.length > 0 && (
        <div className='search-focus'>
          <ul className='search-suggestions'>
            {temp.map((suggestion, index) => (
              <li
                className='searchlist'
                key={index}
                onClick={openPDF(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}


    ^^^ above is the search list ^^^
    
<div className='nav-bar'>
        <Navbar />
      </div>
      <br />
      <br />
      <div className='text-center'>
        <h1 className='text-3xl font-semibold mb-4'>
          Semester Wise Question Papers
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4'>
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => navigate(`/semester/${number}`)} // Use onClick and provide a function
              className='bg-secondary-color text-white p-4 rounded-lg text-center h-32 w-24 flex flex-col items-center justify-center divcard'
            >
              <span className='text-2xl'>{number}</span>
            </button>
          ))}
        </div>
      </div>

    */
