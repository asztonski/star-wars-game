"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { MainContainer } from "./components/Container/MainContainer";
import { Title } from "./components/Title/Title";
import { Loading } from "./components/Loading/Loading";
import { Content } from "./components/Content/Content";

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomPersonResponse = await axios.get(
          "https://swapi.dev/api/people/"
        );
        const randomStarshipResponse = await axios.get(
          "https://swapi.dev/api/starships/"
        );

        const randomPerson =
          randomPersonResponse.data.results[
            Math.floor(Math.random() * randomPersonResponse.data.count)
          ];
        const randomStarship =
          randomStarshipResponse.data.results[
            Math.floor(Math.random() * randomStarshipResponse.data.count)
          ];
        // setApiData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <main>
      <MainContainer>
        <Title />
        {loading ? <Loading /> : <Content data={apiData} />}
      </MainContainer>
    </main>
  );
}
