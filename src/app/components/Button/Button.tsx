type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  content?: string;
  primaryStyle?: boolean;
  secondaryStyle?: boolean;
};

// Use the ButtonProps type in your Button component
export const Button: React.FC<ButtonProps> = ({ children, onClick, content, primaryStyle, secondaryStyle }) => {
  return (
    <button
      onClick={onClick}
      className={`ease-[ease] duration-[0.34s] rounded-xl hover:scale-110 ${primaryStyle ? 'bg-primary' : ''} ${secondaryStyle ? 'bg-secondary' : ''} p-5 flex justify-center items-center w-full uppercase`}
    >
      {children ? children : <p className={`${primaryStyle ? 'text-secondary' : ''} ${secondaryStyle ? 'text-primary' : ''} text-2xl`}>{content}</p>}
    </button>
  );
};
