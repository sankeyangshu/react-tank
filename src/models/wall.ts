import { modelType } from '@/types';
import { imageMap } from '@/utils/image';
import modelAbstract from './modelAbstract';

export default class wall extends modelAbstract implements modelType {
  name = 'wall';
  image(): HTMLImageElement {
    return imageMap.get('wall')!;
  }
  render() {
    super.drawModel();
  }
}
