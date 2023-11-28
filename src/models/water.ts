import water from '@/components/water';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = water;
  name = 'water';
  image(): HTMLImageElement {
    return imageMap.get('water')!;
  }
  render() {
    super.drawModel();
  }
}
