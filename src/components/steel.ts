import { modelConfig } from '@/config';
import steelModel from '@/models/steel';
import canvas from './canvas';

class steel extends canvas {
  num() {
    return modelConfig.steelNum;
  }

  model() {
    return steelModel;
  }

  render() {
    super.createModel();
    super.renderModels();
  }
}

export default new steel('steel');
