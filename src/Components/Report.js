import React from 'react'
import {
    InternalLinksCard,
    ExternalLinksCard,
    ImagesCard,
    ScriptsCard,
    H1tags,
    TitleLength,
    StyleSheets,
    PlainText,
    // Import more card components for other data points...
  } from './Card'
  import "./Card.css"

  import Score from './Score'
const Report = ({seoData}) => {
  return (
    <div>

          {/* <pre>{JSON.stringify(seoData, null, 2)}</pre>   */}
          <h2 className='heading-display'>Displaying SEO report of : {seoData["tasks"][0]["result"][0]["items"][0]["url"]}</h2>
          <Score seoData={seoData}/>
          <div className="seo-info-cards">
         
          <InternalLinksCard internalLinksCount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["internal_links_count"]} />
            <ExternalLinksCard externalLinksCount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["external_links_count"]} />
            <ImagesCard imagesCount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["images_count"]} imagesSize={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["images_size"]} />
            <ScriptsCard scriptsCount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["scripts_count"]} scriptsSize={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["scripts_size"]} />
            <H1tags h1tag={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["htags"][0]} />
            <TitleLength titleLength={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["title_length"]}/>
            <StyleSheets stylesheetcount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["stylesheets_count"]} stylesheetsize={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["stylesheets_size"]}/>
            <PlainText plainTextcount={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["content"]["plain_text_size"]} plainTextrate={seoData["tasks"][0]["result"][0]["items"][0]["meta"]["content"]["plain_text_rate"]}/>
           
            
           
          </div>
        
        
      
    </div>
  )
}

export default Report
