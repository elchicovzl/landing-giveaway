const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-[100vh] bg-[#111827] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
export default AuthLayout;