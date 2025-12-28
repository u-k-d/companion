import Hello from "./hello";

const Home = () => {
  console.log("What type of component am I?");
  return (
    <main className=" min-h-screen flex-col flex items-center justify-between p-24">
      <div className="text-5xl flex-center underline text-light-500">
        Welcome to the first step of your journey! TEST
      </div>
      <Hello />
    </main>
  );
};

export default Home;
