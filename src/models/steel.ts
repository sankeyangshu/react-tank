import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class steel extends modelAbstract implements modelType {
  name = 'steel';

  image(): HTMLImageElement {
    return imageMap.get('steel')!;
  }

  render() {
    super.drawModel();
  }
}
