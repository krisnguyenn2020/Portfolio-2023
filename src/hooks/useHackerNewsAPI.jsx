export default function useHackNewsApi() {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState("react");
   const [loading, setLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");
   const handleFetchData = useRef({});
   const [url, setURL] = useState(
      `https://hn.algolia.com/api/v1/search?query=`
   );
   handleFetchData.current = async () => {
      setLoading(true);
      console.log(loading);
      try {
         const response = await axios.get(url);
         //optional chaining, checking if have response.data then will look for hits
         setHits(response.data?.hits || []);
         setLoading(false);
      } catch (err) {
         setLoading(false);
         setErrorMessage(` Error!! ${err}`);
      }
   };
   return {
    url, query, handleFetchData
   }
}
