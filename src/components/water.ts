import { modelConfig } from '@/config';
import waterModel from '@/models/water';
import canvas from './canvas';

class water extends canvas {
  constructor() {
    super();
    super.createModel(modelConfig.waterNum, waterModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new water();
