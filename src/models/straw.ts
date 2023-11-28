import straw from '@/components/straw';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = straw;

  name = 'straw';

  image(): HTMLImageElement {
    return imageMap.get('straw')!;
  }

  render() {
    super.drawModel();
  }
}
