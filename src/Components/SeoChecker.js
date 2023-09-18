import React, { useState } from 'react';
import axios from 'axios';
import InputButtonComponent from './InputButtonComponent';
import Report from './Report';

function SeoChecker() {
  const [url, setUrl] = useState('');
  const [seoData, setSeoData] = useState(null);

  const [loading, setLoading] = useState(false); 
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const trimmedUrl = url.trim();

    // Check if the entered URL is empty.
    if (!trimmedUrl) {
      alert('Please enter a URL');
      return;
    }
  
    // Check if the URL starts with "http://" or "https://", and if not, add "https://" as a default protocol.
    let formattedUrl = trimmedUrl;
    if (!/^https?:\/\//i.test(trimmedUrl)) {
      formattedUrl = `https://${trimmedUrl}`;
    }
  
    // Handle the formatted URL here, e.g., by logging it.
    console.log('Formatted URL:', formattedUrl);
    setLoading(true); 
    try {
      const postArray = [
        {
          url: formattedUrl,
          enable_javascript: true,
          load_resources: true,
          enable_browser_rendering: true,
          custom_js: 'meta = {}; meta.url = document.URL; meta;',
        },
      ];

      const response = await axios.post(
        'https://api.dataforseo.com/v3/on_page/instant_pages',
        postArray,
        {
          auth: {
            username: 'unnatisaxena1605@gmail.com',
            password: '0bd15685897f2395',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setSeoData(response.data);
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false); 
    }
    
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <InputButtonComponent setUrl={setUrl} url={url} loading={loading}/>
  
      </form>
      {seoData && (
        <div>
          <Report seoData={seoData}/>
        </div>
      )}
    </div>
  );
}

export default SeoChecker;
