import { modelConfig } from '@/config';
import steelModel from '@/models/steel';
import canvas from './canvas';

class steel extends canvas {
  constructor() {
    super();
    super.createModel(modelConfig.steelNum, steelModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new steel();
