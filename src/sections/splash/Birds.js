import React from "react";

// Birds example from https://scalora.net/
// Implemented into React by Rimezin

// const bird = (
//   <svg
//     id="bird-cells"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 3671 510"
//   >
//     <g fill="none" fill-rule="evenodd">
//       <g>
//         <path className="cell-container" stroke="none" d="M.5.5h359v509H.5z" />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M359.5.5h359v509h-359z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M718.5.5h359v509h-359z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M1077.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M1448.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M1818.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M2189.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M2559.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M2930.5.5h370v509h-370z"
//         />
//         <path
//           className="cell-container"
//           stroke="none"
//           d="M3300.5.5h370v509h-370z"
//         />
//         <path
//           fill="#000"
//           d="M51 288.38c13.33-5.34 35.33-9.34 66-12 0 0 18.44-9.95 55-15 1.04-.15 7.5-8 36-13 16 0 21-3.88 30 5 3.53-13.53 19.13-16.58 29-15 6.9 1.1 11.3 5.93 12 8 4 12 21 5 30 12-23 6-23 7-32 11-16 14-31 31-47 31-16 4-32.83 5.33-50.5 4-1 4-3.5 6.66-7.5 8-6 2-1-9-4-12s-3 10-17 18c-1-14-5-10-5-18s4 13-17 18c-14 3.33-31.67 4-53 2 26-8.67 41.33-16.34 46-23-5 0-18-1-21-9-14-4.5-30.67-4.5-50 0z"
//         />
//         <path
//           fill="#000"
//           d="M639 273c0 2.07-10 3-16 5-9 1-8 8-14 7s-5 8-19 14c2 11 21 9 36 19 29 30.62 18 19 37 63 14 28 18 30 27 57-1 1-11-1-14-7-1 5-5 1-4 7-5-1-8-8-12-11-4-1 1 7-2 8-4 0-5-8-9-8-4 1 1 6-2 7-33-30-43-21-43-36-8 10-10-2-19 3-4-5-6-10-2-17-1-5-7 5-11 3-1.33-6 1-12.67 7-20-6.67 6.67-14 10-22 10 1-10-1-6.5 5-16-6 7.5-13 8-19 6-4.43-2.1 4-8 2-11.5-8 0-22.76-.3-24-3.5-3.26-8.4 8-19 4-25-3.12-4.67-12 9-15-3 0-12-4.67-17-14-15-8.67-1.33-19.33-1.33-32 0-19 2-27-5-58-5 10-5 9-13 27-13-21-3-10-10-45-13 30-8 32 0 54 7 68-7 22-15 94-22 14-2 36-4 58 2 5-2 6-5 15-6 8 0 12.67 3.67 14 11 10.67.72 16 1.72 16 3z"
//         />
//         <path
//           fill="#000"
//           d="M729 299.03c32-14 56-26 90-40 20-6 37-5 56-8 28 0 17-8 55-3 8-1 10.95-7.5 19-7 8.67 0 13.33 2.66 14 8l26 5-24 5c-2.67 5.33-8 8.33-16 9-12 12-11 18-29 21 22 13 23 17 64 38 13 11 13 15 17 31 4 15.98 14.06 25.74 21 35 26 46 23 59 45 80-11-1-23-8-28-13-4-1-3 5-3 8-6-2-8-15-16-13-3.46 0 4 5 0 13-13-5-14-7-16-13-3-4-7-11-3-12-2 8 0 12-6 12-5-10-7-3-11-12-8-14-17-12-17-29-4 0-7 4-10 9-3-4 0-9-1-12-2 .66-4.33 1.66-7 3-2-12.67-2-21.67 0-27-8 2-4 6-15 10-5-6-4-12-2-21-5 6-5-3-12 2-9-9-10-18-25-18-5-12-3-20-11-22-3.23.86-4 10-6 7s-2-10-5-12c-2-3-6 6-9 3 0-5-2-11-6-14-3-4-5 0-10 3-2-5-2-9-1-14-4-1-14 5-12-2 0-7-4-4-8-4-5 0 1-5-1-6-5-2-13 2-21 6-5-2 4-10 0-10-31-1-38 7-76 4z"
//         />
//         <path
//           fill="#000"
//           d="M1367 254.1l-18-3c-2-6-5.33-9.35-10-10-14-1-17 7-22 10-21-3-19-1-35 0-30-5-36 4-50 7-36 5-33 9-48 16-34 18-41 19-75 29 6.67.65 14 0 22-2-14.67 4-21 6.32-19 7 31-5 29.02 4.23 52 0 11-3 10-9 13-12 2 7 1 7 2 13 16-3 21-2 30-2 3 4-3.66 8.6 0 10 4-1.35 9.33-2.68 16-4-4 4.65-5.67 8.32-5 11 15 2 12 4 24 1-11 4-11 4-16 10 16 3 14 1 24 2-4 4-3 8-1 11 6-3 9.53-4.5 12-3-3 3.44-5 7-2 9 10-2 12.4-5.28 15-2-3 8 0 11 1 22 5 0 10-2 15-4 1 8-3 8-3 16 6 3 13-3 17-1-7 4-7 6-8 9 7 3 6 2 14 0-5.33 4-7 7.65-5 11 5.33-3.35 8.33-3.35 9 0-2 6 0 7 1 15 10-5 10 2 21 5 5.97 3.27 6.4 10.54 11 14 9 6.74 20 9 19 9s-9-11-5-10c3.33 4 7.67 8.32 13 13 0-8-.67-13.68-2-17 9 14 12 12 28 23 3-13-6-18-15-28 19 22 19 20 30 24-24-30-20-26-29-53-14-26-24-61-39-75-18-12-19-17-38-26-3.33-4.68-7.33-8-12-10 12-2 21.33-5.68 28-11 2-5 7-5 11-9 6-1.35 9.67-4.35 11-9l18-6z"
//         />
//         <path
//           fill="#000"
//           d="M1751 256c-11-1-12-4-24-6-3-6-4-5-10-7-14 0-21 7-29 12-24-3-31-1-44 2-46 12-43 12-70 23-46 27-39 30-58 40 23 6 31-3 47-7-6.67 2.67-8.67 6-6 10 6.67-2.67 11-3.67 13-3-5 2-9.7 10.57-5 10 27-2 30.7-14.27 46-15-4 5-6 8-4 13 12-3 11-2 18-4-2 6-3 6 0 15 8.5 2 13-5 13-5 4 4 0 11 0 20 11 0 11 2 15 0-2 8 2 8 5 14 4-8 7-5 14-12-2 13 5 12 6 21 10-9 11-11 13-21-4 15 2 17 5 28 4-7 7-7 8-16 1 5 3.98 7.87 5 6 3-10 3.32-8.12 4-6-3 13 2 16 5 27 7-12 5-18 5-19 2 15 15 8 28 33 4-14-16-38-23-73-4-23-3-28-14-43-3-7-10-8-13-7 8-4 7-8 12-15 15-2 11-5 15-10-1 0 5-4 23-5z"
//         />
//         <path
//           fill="#000"
//           d="M2119.66 270.36c0-3-11-6-20-6-1.34-2.67-3.67-5-7-7-5.34-2.67-12.34-2.67-21 0-8 1-16-13-8-26 7-3 10-9 11-14-8-4-11-5-22-4-65 4-85 28-110 50-8 7 10 5 18 5-42 0-78 41-72 37s16 6 35-11c2-1-7 5-15 15 21-3 21-6 39-4-2 7 3.6 7.22 9 8 4.33.62 9.2-.44 15 0 12.53 1.4 13-1 18-1 6 0 5.35.6 9 0 9-2 7-3 10-7-3 8 1 11 6 21 7-6 6-14 6-19 0 13-1 9 2 17 6-5 6-4 8-12-3 10-1 17 3 28 5 0 6.84-4.66 10-3 0 5 0 3 6 13 5-5 2 3 7-8-1 10 4 4 10 18 5-10 3-14-1-23 6 13 8 12 13 19 2-19-1-23-7-36 3-19-6-20-5-33.5 8-10.5 15 2 24-6.5 7-1 4-4 9-7 8-5 19 1 20-3z"
//         />
//         <path
//           fill="#000"
//           d="M2485 278.84c-6-3-7-1-16-3 1-5-4.66-10-11-10-9.16 0-9.5 5.2-21 8-9 2.2-12.7 3.03-18-2-24-15-11-19-32-44-9-7-12-11-4-21 13-14 17-22 17-32-4-7-85-3-113 34 5.06 1.15 16.8-6.7 20.65-6 4.35 1-18.65 13-9.65 11 9-2 15-7 21-7 2.67-.05-2 2-3 7 3.78.9 9.8-1.85 16-3 3.52-.65 7.9.34 10 0-4 3-10 1-20 17 6 5.5 14-1.5 20-1.5-3 5.5-11 2.5-15 20.5 2 4 11-6 9-2 0 4-7 2-9 18 6 0 8-7 9-2-2 3-5 3-5 9 3 3 9-4 11-4-1 2-6 2-6 10-38 9-49 18-68 30 7 4.9 23-5 25-1-1.46 3.22-11 5.9-28 11 17 2 31 2 42.65-5.1 10.35 1.1 18.57-1.9 21.35-1.9 4 6 0 13 7 15 3-5 8-12 9-15 3-2-5 11 3 13 9 0 19 7 36 7 18 0 22-6 42-13 12-1 20-5 25-18 3-8 9-4 18-13 2-2 12-3 16-6z"
//         />
//         <path
//           fill="#000"
//           d="M2859 275.74c-.52-2.35-8-3-20-5-6.62-3.1-7.68-9-14-9-13 0-7.83 6.16-21 9-7.7 1.67-15 2-20 0s-6.32-3.7-10-6c-19.2-11.9-10.17.25-19.17-20-10.54-12-10.6-24.55-6.83-42 .97-4.5 2.27-8.15 4-11 6-9.83 12.67-30.6 11-45-1.4-12.16-11-14-27-17-21-4-33-5-58-2-9 8-21 5-33 21 9-1 7-3 14 3 8-4 15.48-1.3 16-1 7.16 4.13-3.54 3.73 1 6 6 0 2 4 0 9 5-.5 8-1 6 4 4.4 3.22 8.36-3.24 9 1 .86 5.76-11.7 9.4-9 17 18 3 20 5 22 7-4 1 3 2-26 11 3 10 14 6 15 16 0 7-9 4-12 17 12 2 9 6 23 6-5 0-18 4-26 12 9 2 6 6 14 7 7 3 6 3.36 4 7-6.5 11.86-5 15-20 23s-26.3 15.78-35 22c-4.63 3.32-7.48 8.23-11 12 12-2 12-3 15-2 2 4 1-3 0 11 6-5 16-12 22-16 5 0 13-3 17 0 5 0 0-7 0-8.96 0-1.96 3.48 5.8 5 3.96 5-6 4-9 3-14 4 3 1 10.9 6 12 19 6 21 5 42-1 1.2-.07 2.95-.92 4.3-.96 1.2 1.42.7 3 3.7 3.96 1.57-2.35 4.93-3.06 6.83-3.1.52 0-.24-.93 0-.86 10 3 17.17 3.96 32.17.96 13-8 24-5 35-17 14-6 14-10 17-16 4-3 9 0 20-4z"
//         />
//         <path
//           fill="#000"
//           d="M3243 286c-8-3-7-2-17-4-7.6-3.28-5-11-21-13-16.1 1.03-15 14-31 13-10.43-.65-13-7-21-11s-13-5-19-12c-13-42-1.27-9.56-3-59-.27-7.56-6-44-1-54 8-3 4.84-13.8 0-22-32-34-40.22-58.03-60-79-4-1 5 12-2 7-8.8-5.08-7-14-23-22 1 5 4 12 2 15-5-3-14-23-20-23 1 4 8 11 8 23 0 4-14-6-9-1s7 13 9 19c7.25 13.18 22 23 22 22-3-1-17-12-26-11 2 5 8 7 10 17-2 2 0 3-8 0 4 19 14 28 35 41 2.6 4.24-11.1-4.18-14-1-2.6 2.82 1.67 8.6 5 15 9.17 17.6 18.32 18.92 20 30-1 4-9.77-1.26-14 2-2.27 1.74 4.75 5.74 4 10-.75 4.24-9.22 1.68-8 6 2.48 2.98-2 12-1 17s4 6 4 11 7-2 8 6c5 4-1 4-8 12 5 5 10 4 8 14s-7 6-12 12c-5 7-3 11-10 17-9 8-15 4-31 16-13 7-14 2-30 13 18 2 36 12 68 5 5 2-5 5-2 7 14 1 16 3 23 0-4 3-10.62 8.7-7 9 8.53.74 23.38-.95 30 0 8.4 1.2 12.75 5 27 5 7.7 0 16.25-8.18 21-7 7.3 1.8 6 2.93 17 0 19.33-5.15 24-9 39-19 8-12 13-9 20-21 11-2 18-2 18-5z"
//         />
//         <path
//           fill="#000"
//           d="M3595.2 274c0-2.56-5-4-13-7-4.25-3.13 0-8-10-10-17 0-11.03 8.98-21 12-10-1-9-2-21 1-4.15 1.04-3.9-10.8-6-13-2.97-3.06-5-3-10-8-3-11 6-24 3-45-1.34-9.32-4.68-21.56-9-33-2.45-13.1-2-10-13-23-21-28-37-37-47-67-4.96-4.56-.68 12.44-5 11-7.68-2.56-15.4-19-19-19-2.9 0 7.5 17.9 4 23-3 4.4-17-7.67-17-5 0 3.33 8 16 15 19-4 4-9.5-4.6-11-1 7 9 1 11 6 24 5.77 12.05 11 8 16 18-3.62 4.17-24.5-6.8-26-3-1.02 2.53 9.7 2.7 17 10 6 6 1.8 13.48 6 16 5 3 2 6 8 13s10-2 8 8c-.94 4.66-4 4.34-4 9 0 5.34 8-1 6 5 0 2.57-4 4-6 8 0 .72 7.58-1.47 8 1 1.08 6.53-7.23 11.8-4 17 3.27 5.3 12 4 17 3-5 4-13 3.95-13 9 0 9.45 10 13 4 18 2 5-5 9-4 13s5.17 8.47 10 10c3.24 1.03 9 2 6 3-6 2-7-1-12 3-4.25 0-2-6-10-4-24 4-60 20-73 34-2 3 12-3 21-4-8 3-20 7-5 6 11 1 28 0 57-5 21.46-.66 17 7 39 2 11 3 28 6 43-5 14-2 15.58-9.85 33-23 6-2 11-11 14-17 7.8-3.53 12-1 18-4z"
//         />
//       </g>
//     </g>
//   </svg>
// );

export default function Birds() {
  return (
    <div className="birds-container">
      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>
      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>
      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>
      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>
    </div>
  );
}
