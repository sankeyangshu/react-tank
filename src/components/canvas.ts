import { canvasConfig } from '@/config';
import { modelAbstractType, modelType } from '@/types';
import position from '@/utils/position';

export default abstract class canvas {
  protected models: modelType[] = [];

  abstract render(): void;

  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvasCtx = el.getContext('2d')!
  ) {
    // 初始化画布
    this.createCanvas();
  }

  // 创建画布
  protected createCanvas() {
    // 设置canvas宽高
    this.el.width = canvasConfig.width;
    this.el.height = canvasConfig.height;

    // 将canvas插入到根节点
    this.app.insertAdjacentElement('afterbegin', this.el);
  }

  // 创建模型
  protected createModel(num: number, model: modelAbstractType) {
    position.drawPositionModels(num).forEach((position) => {
      const instance = new model(this.canvasCtx, position.x, position.y);
      this.models.push(instance);
    });
  }

  // 渲染模型
  protected renderModels() {
    this.models.forEach((model) => {
      model.render();
    });
  }
}
