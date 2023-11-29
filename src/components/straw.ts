import { modelConfig } from '@/config';
import strawModel from '@/models/straw';
import canvas from './canvas';

class straw extends canvas {
  name = 'straw';

  num() {
    return modelConfig.strawNum;
  }

  model() {
    return strawModel;
  }

  render() {
    super.createModel();
    super.renderModels();
  }
}

export default new straw('straw');
