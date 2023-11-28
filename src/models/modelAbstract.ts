import { modelConfig } from '@/config';
import { directionEnum } from '@/config/directionEnum';

export default abstract class modelAbstract {
  // 方向
  protected direction: directionEnum = directionEnum.top;

  // 模型名称
  abstract name: string;

  abstract render(): void;

  abstract image(): HTMLImageElement;

  constructor(protected canvas: CanvasRenderingContext2D, public x: number, public y: number) {
    this.getRandomDirection();
  }

  // 渲染模型
  protected drawModel() {
    this.canvas.drawImage(this.image(), this.x, this.y, modelConfig.width, modelConfig.height);
  }

  // 返回随机方向
  protected getRandomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
  }
}
