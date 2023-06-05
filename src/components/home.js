import Header from "./header";
import TodosLogic from "./todoLogic";
const Home = () => {
    return (
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    );
  };
  export default Home;