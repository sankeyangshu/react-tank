import bullet from '@/components/bullet'; // 导入子弹模型
import steel from '@/components/steel'; // 导入不可破坏墙模型
import straw from '@/components/straw'; // 导入草地模型
import wall from '@/components/wall'; // 导入可破坏墙模型
import water from '@/components/water'; // 导入水模型
import tank from './components/tank'; // 导入坦克模型
import { getAllImageModel } from './utils/image'; // 导入模型贴图
import { canvasConfig } from './config';
import './styles/index.scss'; // 导入默认样式

const app = document.querySelector<HTMLDivElement>('#app')!;

// 设置canvas画布宽高
app.style.width = canvasConfig.width + 'px';
app.style.height = canvasConfig.height + 'px';

async function bootstrap() {
  await Promise.all(getAllImageModel);
  straw.render();
  wall.render();
  water.render();
  steel.render();
  tank.render();
  bullet.render();
}

void bootstrap();
