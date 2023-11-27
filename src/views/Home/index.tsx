import Steel from '@/components/Steel';
import Straw from '@/components/Straw';
import Wall from '@/components/Wall';
import Water from '@/components/Water';
import { canvasConfig } from '@/config';
import './index.less';

const Home = () => {
  return (
    <div className="home">
      <div className="content" style={{ width: canvasConfig.width, height: canvasConfig.height }}>
        <Straw></Straw>
        <Wall></Wall>
        <Water></Water>
        <Steel></Steel>
      </div>
    </div>
  );
};

export default Home;
