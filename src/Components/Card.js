import React from 'react';

// Internal Links Card
function InternalLinksCard({ internalLinksCount }) {
  return (
    <div className="card">
      <h2>Internal Links</h2>
      {internalLinksCount !== null ? (
        <p>{internalLinksCount}</p>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

// External Links Card
function ExternalLinksCard({ externalLinksCount }) {
  return (
    <div className="card">
      <h2>External Links</h2>
      {externalLinksCount !== null ? (
        <p>{externalLinksCount}</p>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

// Number of Images Card
function ImagesCard({ imagesCount, imagesSize }) {
  return (
    <div className="card">
      <h2>Number of Images</h2>
      {imagesCount !== null ? (
        <>
          <p>{imagesCount}</p>
          <p>Size: {imagesSize}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

// Scripts Card
function ScriptsCard({ scriptsCount, scriptsSize }) {
  return (
    <div className="card">
      <h2>Scripts</h2>
      {scriptsCount !== null ? (
        <>
          <p>{scriptsCount}</p>
          <p>Size: {scriptsSize}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

function H1tags({h1tag}){
  return (
    <div className="card">
      <h2> H1 tag exists? </h2>
      {h1tag !== null ?(
        <>
        
          <p>Yes</p>
          
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}
function TitleLength({ titleLength }) {
  return (
    <div className="card">
      <h2>Title Length</h2>
      {titleLength !== null ? (
        <>
          <p>{titleLength}</p>
         
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

function StyleSheets({ stylesheetcount,stylesheetsize }) {
  return (
    <div className="card">
      <h2>StyleSheets</h2>
      {stylesheetcount !== null ? (
        <>
          <p>{stylesheetcount}</p>
          <p>Size: {stylesheetsize}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}
function PlainText({plainTextrate, plainTextcount}){
  return (
    <div className="card">
      <h2>Plain text </h2>
      {plainTextrate !== null ? (
        <>
          <p> Count: {plainTextcount}</p>
          <p>Rate: {plainTextrate}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
}

// More cards for other data points...

export {
  InternalLinksCard,
  ExternalLinksCard,
  ImagesCard,
  ScriptsCard,
  H1tags,
  TitleLength,
  StyleSheets,
  PlainText
  // Add more card components for other data points...
};
