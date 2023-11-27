import { create } from 'zustand';
import { positionType } from '@/types';

/**
 * 模型store类型
 */
export interface modelStoreType {
  modelPositionList: positionType[];
  addPosition: (value: positionType) => void;
}

export const useModelStore = create<modelStoreType>()((_, get) => ({
  modelPositionList: [], // 全部坐标

  // 新增坐标
  addPosition(value: positionType) {
    const { modelPositionList } = get();
    modelPositionList.push(value);
  },
}));
