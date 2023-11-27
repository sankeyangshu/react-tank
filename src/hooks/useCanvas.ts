import { useEffect, useRef } from 'react';
import { canvasConfig, modelConfig } from '@/config';
import { useModelStore } from '@/store/model';
import { positionType } from '@/types';

export const useCanvas = () => {
  // canvas 节点
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 画布内容节点
  const contextRef = useRef<CanvasRenderingContext2D>();

  // 获取模型全部坐标
  const [modelPositionList, addPosition] = useModelStore((state) => [
    state.modelPositionList,
    state.addPosition,
  ]);

  // const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      contextRef.current = context;
      // setCanvasEl(canvas);

      // 初始化画布宽高度
      canvas.width = canvasConfig.width;
      canvas.height = canvasConfig.height;
    }
  }, []);

  // 初始化模型
  const drawModels = (
    num: number,
    callback: (canvas: CanvasRenderingContext2D, x: number, y: number) => void
  ) => {
    drawPositionModels(num).forEach((position) => {
      // 绘制模型
      callback(contextRef.current!, position.x, position.y);
    });
  };

  // 批量绘制模型，并生成唯一坐标
  const drawPositionModels = (num: number) => {
    const positionList: positionType[] = [];
    for (let i = 0; i < num; i++) {
      while (positionList.length < num) {
        const position = getRandomPosition();

        const isRepeat = modelPositionList.some(
          (item) => item.x === position.x && item.y === position.y
        );
        if (!isRepeat) {
          positionList.push(position);
          addPosition(position);
          break;
        }
      }
    }

    return positionList;
  };

  // 获取随机坐标
  const getRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * (canvasConfig.width / modelConfig.width)) * modelConfig.width,
      y:
        Math.floor(Math.random() * (canvasConfig.height / modelConfig.height - 5)) *
          modelConfig.height +
        modelConfig.height * 2,
    };
  };

  return {
    canvasRef,
    contextRef,
    drawModels,
  };
};
