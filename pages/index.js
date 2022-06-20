import { Categories } from "../components/Navigation/Categories";
import { Header } from "../components/Navigation/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen flex h-screen flex-col">
        <Categories />
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
