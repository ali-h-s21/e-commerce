import { Categories } from "../components/Navigation/Categories";
import { Header } from "../components/Navigation/Header";
import { MainWidgets } from "../components/Widgets/MainWidgets";
import { SubWidgets } from "../components/Widgets/SubWidgets";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen flex h-[97vh] max-h-[640px] flex-col px-2">
        <Categories />
        <div className="flex-1 block grid-cols-3 gap-6 p-6  md:grid">
          <MainWidgets />
          <SubWidgets />
        </div>
      </div>
    </div>
  );
}
