import wall from '@/components/wall';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = wall;

  name = 'wall';

  image(): HTMLImageElement {
    return imageMap.get('wall')!;
  }

  render() {
    super.drawModel();
  }
}
