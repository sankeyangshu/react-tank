/**
 * 坐标类型
 */
export interface positionType {
  x: number;
  y: number;
}

/**
 * 模型父类接口类型
 */
export interface modelAbstractType {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): modelType;
}

/**
 * 模型接口
 */
export interface modelType {
  render(): void;
  x: number;
  y: number;
  image(): HTMLImageElement;
}
