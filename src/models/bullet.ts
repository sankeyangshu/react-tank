import bullet from '@/components/bullet';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = bullet;
  name = 'bullet';

  image() {
    return imageMap.get('bullet')!;
  }

  render() {
    super.drawModel();
  }
}
