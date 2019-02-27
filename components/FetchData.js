import React, { useState, useEffect } from "react";

export function FetchData() {
  const [data, setData] = useState([]);
  // const [toggleL, setToggleL] = useState(false);
  // const [toggleR, setToggleR] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const colorful = document.querySelectorAll(".colorful")[0];
  //     colorful.style.background = getRandomColor();
  //   }, 1000);
  // });

  const getData = async () => {
    const data = await fetch("https://api.github.com/users/mariouhrin");
    setData(await data.json());
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <button cassName="btn-blue" onClick={() => setToggleL(!toggleL)}>
        Toggle Left
      </button>
      <button className="btn-green" onClick={() => setToggleR(!toggleR)}>
        Toggle Right
      </button> */}
      <div className="colorful" />
    </>
  );
}
