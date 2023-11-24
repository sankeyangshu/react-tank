import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { getAllImageModel } from '@/utils/image';
import Router from './routers';

const App = () => {
  // 判断图片是否已经加载完成
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // 加载模型图片
  const onLoadImage = async () => {
    await Promise.all(getAllImageModel);
    // 图片加载完成
    setIsImageLoaded(true);
  };

  useEffect(() => {
    onLoadImage();
  }, []);

  return <HashRouter>{isImageLoaded && <Router />}</HashRouter>;
};

export default App;
