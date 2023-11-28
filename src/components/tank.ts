import { canvasConfig, modelConfig } from '@/config';
import tankModel from '@/models/tank';
import { modelAbstractType } from '@/types';
import position from '@/utils/position';
import canvas from './canvas';

class tank extends canvas {
  constructor() {
    super();
  }
  render(): void {
    this.createModel(modelConfig.tankNum, tankModel);
    this.renderModels();

    setInterval(() => this.renderModels(), modelConfig.timeout);
  }

  protected createModel(num: number, model: modelAbstractType) {
    for (let i = 0; i < num; i++) {
      const pos = position.getRandomPosition();
      const instance = new model(this.canvasCtx, pos.x, 0);
      this.models.push(instance);
    }
  }

  // 绘制模型
  protected renderModels() {
    this.canvasCtx.clearRect(0, 0, canvasConfig.width, canvasConfig.height);
    super.renderModels();
  }
}

export default new tank();
