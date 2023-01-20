import React from "react";

function GifList({ handleGifs }) {
  return (
    <ul>
      {handleGifs.map((gif, index) => (
        <li key={index}>
          <img src={gif.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;

// import React from "react";

// function GifList({ handleGifs }) {
//   return (
//     <ul>
//       {handleGifs.map((gif) => (
//         <li key={gif.url}>
//           <img src={gif.url} alt="gif" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default GifList;