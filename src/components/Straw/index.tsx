import { useEffect } from 'react';
import { modelConfig } from '@/config';
import { useCanvas } from '@/hooks/useCanvas';
import { imageMap } from '@/utils/image';

const Straw = () => {
  // 获取canvas
  const { canvasRef, drawModels } = useCanvas();

  useEffect(() => {
    drawModels(modelConfig.strawNum, (canvas, x, y) => {
      canvas.drawImage(imageMap.get('straw')!, x, y, modelConfig.width, modelConfig.height);
    });
  });

  return <canvas ref={canvasRef}></canvas>;
};

export default Straw;
