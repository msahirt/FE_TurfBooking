// import React, { useState } from 'react';

// const FileUploader = () => {
//   const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);

//     setFiles([...files, ...selectedFiles]);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         multiple
//         accept="image/*, video/*"
//         onChange={handleFileChange}
//       />
//       <div>
//         {files.map((file, index) => (
//           <div key={index}>
//             {file.type.startsWith('image/') && (
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt={`Image ${index}`}
//                 style={{ maxWidth: '100px', maxHeight: '100px' }}
//               />
//             )}
//             {file.type.startsWith('video/') && (
//               <video controls style={{ maxWidth: '100px', maxHeight: '100px' }}>
//                 <source src={URL.createObjectURL(file)} type={file.type} />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FileUploader;
// import React, { useRef } from 'react';

// const MyComponent = () => {
//   const inputRef = useRef();

//   const handleClick = () => {
//     inputRef.current.click();
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default MyComponent;


import React, { useRef } from 'react';

const MediaPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleVolumeChange = (value) => {
    videoRef.current.volume = value;
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="path_to_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={(e) => handleVolumeChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MediaPlayer;

