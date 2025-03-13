import React from "react";

const KlarnaPage: React.FC = () => {
  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            position: relative;
          }

          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          /* Invisible overlay div that blocks interactions */
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0); /* Transparent background */
            z-index: 2; /* Ensure it is above the iframe */
          }
        `}
      </style>
      {/* Corrected Twitch Embed URL */}
      <iframe
        src="https://player.twitch.tv/?channel=lcabanken&parent=http://lcabanken.se/support"
        height="100%"
        width="100%"
        frameBorder="0"
        allowFullScreen={true}
      />
      {/* Invisible overlay div */}
      <div className="overlay"></div>
    </>
  );
};

export default KlarnaPage;
