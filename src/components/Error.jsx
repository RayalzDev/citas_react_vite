const Error = ({children}) => {
  return (
    <p className="text-red-600 font-bold mb-3 text-center">
      {children}
    </p>
  );
};

export default Error;
