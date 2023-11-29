import { modelConfig } from '@/config';
import wallModel from '@/models/wall';
import canvas from './canvas';

class wall extends canvas {
  num() {
    return modelConfig.wallNum;
  }

  model() {
    return wallModel;
  }

  render() {
    super.createModel();
    super.renderModels();
  }
}

export default new wall('wall');
