import React from 'react'
import "./Score.css";
const Score = ({seoData}) => {
  return (
    <div className='seo-score'>

    SEO SCORE: {seoData["tasks"][0]["result"][0]["items"][0]["onpage_score"]}

      
    </div>
  )
}

export default Score
