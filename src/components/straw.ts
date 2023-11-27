import { modelConfig } from '@/config';
import strawModel from '@/models/straw';
import canvas from './canvas';

class straw extends canvas {
  constructor() {
    super();
    super.createModel(modelConfig.strawNum, strawModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new straw();
