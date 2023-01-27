import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// khi nào cái function nhận vào tham số là State của Component thì mới viết ở trong
// k phụ thuộc thì viết ở ngoài

const getRandomPhoto = async (page) => {
   try {
      const response = await axios.get(
         `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      return response.data;
   } catch (err) {
      // Handle error
      console.log(err);
   }
};

const Photo = () => {
   //  useEffect(function callback() {
   //side-effects
   //  }, []);
   // Sử dụng useState để lấy data từ useEffect ra bên ngoài
   const [page, setPage] = useState(1);

   const [randomPhotos, setRandomPhotos] = useState([]);

   const handleLoadMore = async () => {
      // console.log("load more");
      // parameter name can be whatever
      const images = await getRandomPhoto(page);
      // console.log(newPhotos);
      const newPhotos = [...randomPhotos, ...images];
      // console.log("GetRandomPhotos ~ newPhotos", newPhotos);
      setRandomPhotos(newPhotos);
      setPage(page + 1);
   };

   useEffect(() => {
      handleLoadMore();
   }, []);

   return (
      //useEffect(callback, [dependencies])
      <div className="">
         <div className="grid grid-cols-4 gap-20 p-5 ">
            {randomPhotos.length > 0 &&
               randomPhotos.map((item) => {
                  return (
                     <div
                        className="h-[400px] w-[400px] p-3 bg-white shadow-md rounded-lg"
                        key={item.id}
                     >
                        <img
                           className="w-full h-full object-cover rounded-lg"
                           src={item.download_url}
                           alt="item.author"
                        />
                     </div>
                  );
               })}
         </div>
         <div className="text-center">
            <button
               onClick={handleLoadMore}
               className="text-2xl border-lime-200 inline-block px-8 py-3 my-8 rounded-xl bg-sky-600 text-white m-auto"
            >
               Load More
            </button>
         </div>
      </div>
   );
};

export default Photo;
