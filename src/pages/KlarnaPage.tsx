import React, { useEffect } from 'react';

function KlarnaPage() {
  useEffect(() => {
    // Prevent scrolling on the body when this component mounts
    document.body.style.overflow = 'hidden';
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <iframe
        src="https://player.twitch.tv/?channel=klarnadirect&parent=localhost"
        className="w-full h-full border-0"
        allowFullScreen={true}
      />
      <div className="absolute inset-0 z-10" />
    </div>
  );
}

export default KlarnaPage;