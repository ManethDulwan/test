"use client";
import React, { useState, useEffect } from 'react';
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=1');
      const { results } = await res.json();
      setData(results);
    };

    var N = 3;
    var array = [];
    var mat = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    for (var i = N - 1; i >= 0; i--) {
      for (var j = N - 1; j >= 0; j--) {
        array.push(mat[i][j]);

      }
    }
    var output = [[1, 1], [1, 1], [1, 1]];
    var arry_num = 0;
    for (var i = 0; i <= 2; i++) {
      for (var j = 0; j <= 2; j++) {
        output[i][j] = array[arry_num];
        arry_num = arry_num + 1;
      }
    }
    console.log(output);

    fetchData();
  }, []);
  const handlemale = () => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=1?&&gender=male&&nat=CA');
      const { results } = await res.json();
      setData(results);
    };
    fetchData();
  };
  const hamdlefemale = () => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=1?&&gender=female&&nat=CA');
      const { results } = await res.json();
      setData(results);
    };
    fetchData();
    console.log(data);
  };

  return (
    <>

      {(data.map((item, index) => {
        return (
          <>
            <div class="h-screen dark:bg-gray-700 bg-gray-200 pt-12" >
              <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" key={index}>

                <div class="border-b px-4 pb-6">
                  <div class="text-center my-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                    onClick={handlemale}>Male</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                    onClick={hamdlefemale}>
                      Female
                    </button>
                   <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                      src={item.picture.large} alt="" />
                    <div class="py-2">
                      <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{item.name.title + "." + item.name.first + "  " + item.name.last}</h3>
                      <h5 class="font-bold  text-gray-800 dark:text-white mb-1">📌 {item.location.country + "," + item.location.city + "," + item.location.street.name}</h5>
                      <p class="text-gray-600 dark:text-gray-300">✉️  {" "+item.email}</p>
                      <p class="text-gray-600 dark:text-gray-300">🧁 {item.dob.date}</p>
                      <p class="text-gray-600 dark:text-gray-300">📞 {item.cell}</p>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-4">
                  <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }))};
    </>
  )
}
