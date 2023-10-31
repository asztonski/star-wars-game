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
        const response = await axios.get("https://swapi.dev/api/people/1");
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <MainContainer>
        <Title />
        {loading ? (
          <Loading />
        ) : (
          <Content data={apiData} />
        )}
      </MainContainer>
    </main>
  );
}
