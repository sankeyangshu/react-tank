import { modelConfig } from '@/config';

export default abstract class modelAbstract {
  abstract render(): void;

  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}

  protected drawModel(img: HTMLImageElement) {
    this.canvas.drawImage(img, this.x, this.y, modelConfig.width, modelConfig.height);
  }
}
