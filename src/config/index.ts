import bullet from '@/assets/images/bullet/bullet.jpg';
import straw from '@/assets/images/straw/straw.png';
import tankBottom from '@/assets/images/tank/bottom.gif';
import tankLeft from '@/assets/images/tank/left.gif';
import tankRight from '@/assets/images/tank/right.gif';
import tankTop from '@/assets/images/tank/top.gif';
import steel from '@/assets/images/wall/steels.gif';
import wall from '@/assets/images/wall/wall.gif';
import water from '@/assets/images/water/water.gif';

/**
 * 游戏配置-画布宽高
 */
export const canvasConfig = {
  width: 900,
  height: 600,
};

/**
 * 游戏配置-模型配置
 */
export const modelConfig = {
  width: 30,
  height: 30,
  strawNum: 60, // 草地数量
  wallNum: 50, // 可破坏墙的数量
  waterNum: 20, // 水的数量
  steelNum: 20, // 不可破坏墙的数量
  tankNum: 6, // 坦克数量
  timeout: 50, // 模型移动间隔
};

/**
 * 游戏配置-模型贴图
 */
export const imagesConfig = {
  straw,
  wall,
  water,
  steel,
  tankBottom,
  tankLeft,
  tankRight,
  tankTop,
  bullet,
};
