import { RecoilRoot } from "recoil";
import Dump from "../Dump";
import Tasks from "../Tasks";

const Dashboard = () => {
  return (
    <RecoilRoot>
      <main>
        <Tasks />
        <Dump />
      </main>
    </RecoilRoot>
  )
}

export default Dashboard;