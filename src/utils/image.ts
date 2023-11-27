import { imagesConfig } from '@/config';

/**
 * 模型贴图类型
 */
type imageType = keyof typeof imagesConfig;

export const imageMap = new Map<imageType, HTMLImageElement>();

export const getAllImageModel = Object.entries(imagesConfig).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = value;
    img.onload = () => {
      imageMap.set(key as imageType, img);
      resolve(img);
    };
  });
});
