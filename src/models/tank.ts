import _ from 'lodash';
import { imagesConfig } from '@/config';
import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class tank extends modelAbstract implements modelType {
  name = 'tank';

  render() {
    super.drawModel();
    this.move();
  }

  // 返回随机图片
  image() {
    const direction = `${this.name}${_.upperFirst(this.direction)}`;

    return imageMap.get(direction as keyof typeof imagesConfig)!;
  }

  // 坦克移动
  protected move() {
    switch (this.direction) {
      case 'top':
        this.y--;
        break;
      case 'right':
        this.x++;
        break;
      case 'bottom':
        this.y++;
        break;
      case 'left':
        this.x--;
        break;
    }
    super.drawModel();
  }
}
