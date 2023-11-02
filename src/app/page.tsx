"use client";
import { MainContainer } from "./components/Container/MainContainer";
import { Title } from "./components/Title/Title";
import { Content } from "./components/Content/Content";

export default function Home() {

  return (
    <main>
      <MainContainer>
        <Title />
        <Content />
      </MainContainer>
    </main>
  );
}
