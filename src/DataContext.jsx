import React, {createContext, useState, useEffect, useContext} from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext)
}
export const DataProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://shubham-yelekar.github.io/projects-json/projects.json", {cache : "no-cache"});
        const result = await response.json();
        setData(result)
      } catch(error){
        console.log(`Data fetching Error : ${error}`)
      } finally {
        setLoading(false)

      }
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, loading}}>
      {children}
    </DataContext.Provider>
  );
}