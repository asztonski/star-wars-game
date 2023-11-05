"use client";
import { MainContainer } from "./components/Container/MainContainer";
import { Title } from "./components/Title/Title";
import { Content } from "./components/Content/Content";

export default function Home() {
  return (
    <main>
      <MainContainer data-testid="main-container">
        <Title data-testid="main-title" content="Star wars<br />game" />
        <Content data-testid="main-content" />
      </MainContainer>
    </main>
  );
}
