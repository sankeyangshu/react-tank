import { modelConfig } from '@/config';
import wallModel from '@/models/wall';
import canvas from './canvas';

class wall extends canvas {
  constructor() {
    super();
    super.createModel(modelConfig.wallNum, wallModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new wall();
