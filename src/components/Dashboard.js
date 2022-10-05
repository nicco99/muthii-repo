import Marquee from "./Marquee";
import TopMenu from "./TopMenu";
import LowerMenu from "./LowerMenu";

function Dashboard() {
  return (
    <div className="container mx-auto bg-purple-900 h-screen w-screen max-h-full m-0">
      <TopMenu />
      <Marquee />
      <LowerMenu />
    </div>
  );
}

export default Dashboard;
