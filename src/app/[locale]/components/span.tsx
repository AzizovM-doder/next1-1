const Span = ({ text }: { text: string }) => {
  return (
    <span className={`text-4xl lg:text-6xl text-[#386382] font-bold`}>
      {text}
    </span>
  );
};

export default Span;
