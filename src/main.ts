import straw from '@/components/straw'; // 导入草地模型
import wall from '@/components/wall';
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
}

void bootstrap();
