// 存储管理模块

const STORAGE_KEYS = {
  CUSTOM_DATA: 'gojuon_custom_data',
  LAST_DATE: 'gojuon_last_date',
  CURRENT_INDEX: 'gojuon_current_index',
  USE_CUSTOM: 'gojuon_use_custom'
};

// 获取今天的日期字符串
function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

// 基于日期生成确定性的随机索引
function getDailyIndex(dataLength) {
  const today = getTodayString();
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    const char = today.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash) % dataLength;
}

// 存储管理类
class StorageManager {
  // 获取自定义词库
  static async getCustomData() {
    return new Promise((resolve) => {
      chrome.storage.local.get([STORAGE_KEYS.CUSTOM_DATA], (result) => {
        resolve(result[STORAGE_KEYS.CUSTOM_DATA] || null);
      });
    });
  }

  // 保存自定义词库
  static async saveCustomData(data) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [STORAGE_KEYS.CUSTOM_DATA]: data }, resolve);
    });
  }

  // 获取是否使用自定义词库
  static async getUseCustom() {
    return new Promise((resolve) => {
      chrome.storage.local.get([STORAGE_KEYS.USE_CUSTOM], (result) => {
        resolve(result[STORAGE_KEYS.USE_CUSTOM] || false);
      });
    });
  }

  // 设置是否使用自定义词库
  static async setUseCustom(value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [STORAGE_KEYS.USE_CUSTOM]: value }, resolve);
    });
  }

  // 获取当前索引
  static async getCurrentIndex() {
    return new Promise((resolve) => {
      chrome.storage.local.get([STORAGE_KEYS.CURRENT_INDEX, STORAGE_KEYS.LAST_DATE], (result) => {
        const lastDate = result[STORAGE_KEYS.LAST_DATE];
        const today = getTodayString();
        
        // 如果是新的一天，返回 null 表示需要重新计算
        if (lastDate !== today) {
          resolve(null);
        } else {
          resolve(result[STORAGE_KEYS.CURRENT_INDEX] ?? null);
        }
      });
    });
  }

  // 保存当前索引
  static async saveCurrentIndex(index) {
    return new Promise((resolve) => {
      chrome.storage.local.set({
        [STORAGE_KEYS.CURRENT_INDEX]: index,
        [STORAGE_KEYS.LAST_DATE]: getTodayString()
      }, resolve);
    });
  }

  // 获取有效的词库数据
  static async getActiveData() {
    const useCustom = await this.getUseCustom();
    if (useCustom) {
      const customData = await this.getCustomData();
      if (customData && customData.length > 0) {
        return customData;
      }
    }
    return DEFAULT_GOJUON_DATA;
  }
}
