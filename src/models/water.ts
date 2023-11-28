import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class water extends modelAbstract implements modelType {
  name = 'water';
  image(): HTMLImageElement {
    return imageMap.get('water')!;
  }
  render() {
    super.drawModel();
  }
}
