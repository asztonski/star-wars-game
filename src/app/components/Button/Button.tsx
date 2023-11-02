type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  content?: string;
};

// Use the ButtonProps type in your Button component
export const Button: React.FC<ButtonProps> = ({ children, onClick, content }) => {
  return (
    <button
      onClick={onClick}
      className={`ease-[ease] duration-[0.34s] rounded-xl hover:scale-110 bg-cyan-900 p-10 flex justify-center items-center w-full uppercase`}
    >
      {children ? children : <p className={'text-yellow-300 text-2xl'}>{content}</p>}
    </button>
  );
};
