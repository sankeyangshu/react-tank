import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class water extends modelAbstract implements modelType {
  render(): void {
    super.drawModel(imageMap.get('water')!);
  }
}
