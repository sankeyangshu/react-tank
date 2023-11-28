import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class straw extends modelAbstract implements modelType {
  name = 'straw';
  image(): HTMLImageElement {
    return imageMap.get('straw')!;
  }
  render() {
    super.drawModel();
  }
}
