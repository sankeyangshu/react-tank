import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class straw extends modelAbstract implements modelType {
  render(): void {
    super.drawModel(imageMap.get('straw')!);
  }
}
