const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen mx-auto max-w-8xl px-7 md:px-8 lg:px-20'>
      {children}
    </div>
  );
};

export default Container;
