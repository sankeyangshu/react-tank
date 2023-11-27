import { canvasConfig, modelConfig } from '@/config';
import { positionType } from '@/types';

class position {
  collection: positionType[] = [];

  //批量获取唯一坐标
  public drawPositionModels = (num: number) => {
    const positionList: positionType[] = [];
    for (let i = 0; i < num; i++) {
      while (positionList.length < num) {
        const position = this.getRandomPosition();

        const isRepeat = this.collection.some(
          (item) => item.x === position.x && item.y === position.y
        );
        if (!isRepeat) {
          positionList.push(position);
          this.collection.push(position);
          break;
        }
      }
    }

    return positionList;
  };

  // 获取随机坐标
  public getRandomPosition() {
    return {
      x: Math.floor(Math.random() * (canvasConfig.width / modelConfig.width)) * modelConfig.width,
      y:
        Math.floor(Math.random() * (canvasConfig.height / modelConfig.height - 5)) *
          modelConfig.height +
        modelConfig.height * 2,
    };
  }
}

export default new position();
