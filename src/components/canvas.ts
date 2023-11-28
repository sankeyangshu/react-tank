import { canvasConfig } from '@/config';
import { modelAbstractType, modelType } from '@/types';
import position from '@/utils/position';

export default abstract class canvas {
  public models: modelType[] = [];

  abstract num(): number;
  abstract model(): modelAbstractType;
  abstract render(): void;

  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    public canvasCtx = el.getContext('2d')!
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
  protected createModel() {
    position.drawPositionModels(this.num()).forEach((position) => {
      const model = this.model();
      const instance = new model(position.x, position.y);
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
