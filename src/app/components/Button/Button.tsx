type ButtonProps = {
  onClick: () => void;
  content?: string;
  primaryStyle?: boolean;
  secondaryStyle?: boolean;
  testId?: string;
};

// Use the ButtonProps type in your Button component
export const Button: React.FC<ButtonProps> = ({
  onClick,
  content,
  primaryStyle,
  secondaryStyle,
  testId,
}) => {
  return (
    <button
      role="button"
      data-testid={testId}
      onClick={onClick}
      className={`ease-[ease] duration-[0.34s] rounded-xl hover:scale-110 ${
        primaryStyle ? "bg-primary" : ""
      } ${
        secondaryStyle ? "bg-secondary" : ""
      } p-5 flex justify-center items-center w-full uppercase`}
    >
      <span
        data-testid="text-element"
        className={`text-2xl ${primaryStyle ? "text-secondary" : ""} ${
          secondaryStyle ? "text-primary" : ""
        }`}
      >
        {content}
      </span>
    </button>
  );
};
