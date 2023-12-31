const PrivateLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="bg-[#111827] overflow-auto !min-h-screen">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          {children}
        </div>
      </main>
     );
  }
   
  export default PrivateLayout;