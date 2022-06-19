import { Categories } from "../components/Navigation/Categories";
import { Header } from "../components/Navigation/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen h-screen flex flex-col">
        <Categories />
        <div className="flex-1  ">widgets goes here</div>
      </div>
    </div>
  );
}
