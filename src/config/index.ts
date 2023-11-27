import straw from '@/assets/images/straw/straw.png';
import wall from '@/assets/images/wall/wall.gif';

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
  wallNum: 50, // 墙的数量
  waterNum: 20,
  steelNum: 20,
  tankNum: 6,
};

/**
 * 游戏配置-模型贴图
 */
export const imagesConfig = {
  straw,
  wall,
};
