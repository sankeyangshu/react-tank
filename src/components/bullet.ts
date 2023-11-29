import bulletModel from '@/models/bullet';
import canvas from './canvas';

class bullet extends canvas {
  num() {
    return 0;
  }

  model() {
    return bulletModel;
  }

  render() {
    super.createModel();
    super.renderModels();
  }
}

export default new bullet('bullet');
