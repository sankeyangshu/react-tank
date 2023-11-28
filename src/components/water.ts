import { modelConfig } from '@/config';
import waterModel from '@/models/water';
import canvas from './canvas';

class water extends canvas {
  num() {
    return modelConfig.waterNum;
  }

  model() {
    return waterModel;
  }

  render() {
    super.createModel();
    super.renderModels();
  }
}

export default new water();
