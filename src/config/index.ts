import boss from '@/assets/images/boss/boss.png';
import bullet from '@/assets/images/bullet/bullet.jpg';
import playBottom from '@/assets/images/player/bottom.gif';
import playLeft from '@/assets/images/player/left.gif';
import playRight from '@/assets/images/player/right.gif';
import playTop from '@/assets/images/player/top.gif';
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
  strawNum: 60,
  wallNum: 50,
  waterNum: 20,
  steelNum: 20,
};

/**
 * 游戏配置-模型贴图
 */
export const imagesConfig = {
  straw,
  wall,
  water,
  steel,
  tankTop,
  tankRight,
  tankBottom,
  tankLeft,
  bullet,
  boss,
  playTop,
  playRight,
  playBottom,
  playLeft,
};
