import steel from '@/components/steel';
import { canvasType, modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class extends modelAbstract implements modelType {
  canvas: canvasType = steel;

  name = 'steel';

  image(): HTMLImageElement {
    return imageMap.get('steel')!;
  }

  render() {
    super.drawModel();
  }
}
