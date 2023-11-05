type TitleProps = {
  content: string,
}

export const Title: React.FC<TitleProps> = ({ content }) => {
  return (
    <h1
      className={
        "uppercase text-center text-stroke tracking-widest text-2xl md:text-5xl font-black"
      }
      dangerouslySetInnerHTML={{ __html: content}}
    />
  );
};
