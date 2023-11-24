import Straw from '@/components/Straw';
import { canvasConfig } from '@/config';
import './index.less';

const Home = () => {
  return (
    <div className="home">
      <div className="content" style={{ width: canvasConfig.width, height: canvasConfig.height }}>
        <Straw></Straw>
      </div>
    </div>
  );
};

export default Home;
