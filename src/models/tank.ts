import _ from 'lodash';
import steel from '@/components/steel';
import tank from '@/components/tank';
import wall from '@/components/wall';
import water from '@/components/water';
import { canvasConfig, imagesConfig } from '@/config';
import { directionEnum } from '@/config/directionEnum';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = tank;
  name = 'tank';

  render() {
    this.move();
    // 增加向下概率
    if (_.random(20) === 1) {
      this.direction = directionEnum.bottom;
    }
  }

  // 返回随机图片
  image() {
    const direction = `${this.name}${_.upperFirst(this.direction)}`;

    return imageMap.get(direction as keyof typeof imagesConfig)!;
  }

  // 坦克移动
  protected move() {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case 'top':
          y--;
          break;
        case 'right':
          x++;
          break;
        case 'bottom':
          y++;
          break;
        case 'left':
          x--;
          break;
      }
      if (this.isTouch(x, y)) {
        this.getRandomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }

    super.drawModel();
  }

  // 判断是否碰撞
  protected isTouch(x: number, y: number) {
    if (
      x < 0 ||
      x + this.width > canvasConfig.width ||
      y < 0 ||
      y + this.height > canvasConfig.height
    ) {
      return true;
    }

    const models = [...water.models, ...wall.models, ...steel.models];

    return models.some((model) => {
      const state =
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height;

      return !state;
    });
  }
}
