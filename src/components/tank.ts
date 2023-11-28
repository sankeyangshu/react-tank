import { canvasConfig, modelConfig } from '@/config';
import tankModel from '@/models/tank';
import position from '@/utils/position';
import canvas from './canvas';

class tank extends canvas {
  num() {
    return modelConfig.tankNum;
  }

  model() {
    return tankModel;
  }

  render() {
    this.createModel();
    this.renderModels();

    setInterval(() => this.renderModels(), modelConfig.timeout);
  }

  protected createModel() {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.getRandomPosition();
      const model = this.model();
      const instance = new model(pos.x, 0);
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
