// 应用主逻辑

class GojuonApp {
  constructor() {
    this.currentIndex = 0;
    this.data = DEFAULT_GOJUON_DATA;
    this.customData = null;
    this.useCustom = false;
    this.tempCustomData = null;
    
    this.init();
  }

  async init() {
    // 加载存储的数据
    await this.loadStoredData();
    
    // 绑定事件
    this.bindEvents();
    
    // 初始化显示
    this.updateDisplay();
    this.updateProgress();
  }

  async loadStoredData() {
    // 获取是否使用自定义词库
    this.useCustom = await StorageManager.getUseCustom();
    
    // 获取自定义词库
    this.customData = await StorageManager.getCustomData();
    
    // 设置当前使用的数据
    this.data = await StorageManager.getActiveData();
    
    // 获取当前索引
    const storedIndex = await StorageManager.getCurrentIndex();
    if (storedIndex !== null) {
      this.currentIndex = storedIndex;
    } else {
      // 新的一天，使用基于日期的随机索引
      this.currentIndex = getDailyIndex(this.data.length);
      await StorageManager.saveCurrentIndex(this.currentIndex);
    }
  }

  bindEvents() {
    // 导航按钮
    document.getElementById('prevBtn').addEventListener('click', () => this.navigate(-1));
    document.getElementById('nextBtn').addEventListener('click', () => this.navigate(1));
    
    // 随机按钮
    document.getElementById('randomBtn').addEventListener('click', () => this.randomSwitch());
    
    // 设置按钮
    document.getElementById('settingsBtn').addEventListener('click', () => this.openSettings());
    
    // 弹窗关闭
    document.getElementById('modalClose').addEventListener('click', () => this.closeSettings());
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeSettings();
    });
    document.getElementById('cancelBtn').addEventListener('click', () => this.closeSettings());
    
    // 保存按钮
    document.getElementById('saveBtn').addEventListener('click', () => this.saveSettings());
    
    // 自定义词库开关
    document.getElementById('useCustomToggle').addEventListener('change', (e) => {
      this.toggleCustomMode(e.target.checked);
    });
    
    // 添加词条
    document.getElementById('addEntryBtn').addEventListener('click', () => this.addEntry());
    
    // 重置按钮
    document.getElementById('resetBtn').addEventListener('click', () => this.resetToDefault());
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('modalOverlay').classList.contains('active')) return;
      
      if (e.key === 'ArrowLeft') {
        this.navigate(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigate(1);
      } else if (e.key === ' ' || e.key === 'r') {
        e.preventDefault();
        this.randomSwitch();
      }
    });
  }

  navigate(direction) {
    const card = document.getElementById('learningCard');
    card.classList.add('switching');
    
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + direction + this.data.length) % this.data.length;
      this.updateDisplay();
      this.updateProgress();
      StorageManager.saveCurrentIndex(this.currentIndex);
      
      setTimeout(() => {
        card.classList.remove('switching');
      }, 150);
    }, 150);
  }

  randomSwitch() {
    const card = document.getElementById('learningCard');
    card.classList.add('switching');
    
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.data.length);
      } while (newIndex === this.currentIndex && this.data.length > 1);
      
      this.currentIndex = newIndex;
      this.updateDisplay();
      this.updateProgress();
      StorageManager.saveCurrentIndex(this.currentIndex);
      
      setTimeout(() => {
        card.classList.remove('switching');
      }, 150);
    }, 150);
  }

  updateDisplay() {
    const item = this.data[this.currentIndex];
    if (!item) return;
    
    document.getElementById('kana').textContent = item.kana;
    document.getElementById('romaji').textContent = item.romaji;
    document.getElementById('exampleJp').textContent = item.example_jp;
    document.getElementById('exampleRomaji').textContent = item.example_romaji;
    document.getElementById('exampleCn').textContent = item.example_cn;
    document.getElementById('exampleEn').textContent = item.example_en;
  }

  updateProgress() {
    document.getElementById('currentNum').textContent = this.currentIndex + 1;
    document.getElementById('totalNum').textContent = this.data.length;
  }

  openSettings() {
    // 初始化临时数据
    this.tempCustomData = this.customData ? JSON.parse(JSON.stringify(this.customData)) : 
                          JSON.parse(JSON.stringify(DEFAULT_GOJUON_DATA));
    
    // 设置开关状态
    document.getElementById('useCustomToggle').checked = this.useCustom;
    this.updateEditorState(this.useCustom);
    
    // 渲染词条列表
    this.renderEntries();
    
    // 显示弹窗
    document.getElementById('modalOverlay').classList.add('active');
  }

  closeSettings() {
    document.getElementById('modalOverlay').classList.remove('active');
    this.tempCustomData = null;
  }

  toggleCustomMode(enabled) {
    this.updateEditorState(enabled);
  }

  updateEditorState(enabled) {
    const editorSection = document.getElementById('editorSection');
    if (enabled) {
      editorSection.classList.add('active');
    } else {
      editorSection.classList.remove('active');
    }
  }

  renderEntries() {
    const container = document.getElementById('entriesList');
    container.innerHTML = '';
    
    this.tempCustomData.forEach((item, index) => {
      const entryEl = document.createElement('div');
      entryEl.className = 'entry-item';
      entryEl.innerHTML = `
        <input type="text" class="entry-input kana-input" placeholder="假名" value="${item.kana}" data-field="kana" data-index="${index}">
        <input type="text" class="entry-input" placeholder="罗马字" value="${item.romaji}" data-field="romaji" data-index="${index}">
        <input type="text" class="entry-input" placeholder="示例词" value="${item.example_jp}" data-field="example_jp" data-index="${index}">
        <input type="text" class="entry-input" placeholder="示例罗马字" value="${item.example_romaji}" data-field="example_romaji" data-index="${index}">
        <input type="text" class="entry-input" placeholder="中文" value="${item.example_cn}" data-field="example_cn" data-index="${index}">
        <input type="text" class="entry-input" placeholder="英文" value="${item.example_en}" data-field="example_en" data-index="${index}">
        <button class="delete-btn" data-index="${index}" aria-label="删除">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;
      
      // 绑定输入事件
      entryEl.querySelectorAll('.entry-input').forEach(input => {
        input.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.index);
          const field = e.target.dataset.field;
          this.tempCustomData[idx][field] = e.target.value;
        });
      });
      
      // 绑定删除事件
      entryEl.querySelector('.delete-btn').addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index);
        this.deleteEntry(idx);
      });
      
      container.appendChild(entryEl);
    });
  }

  addEntry() {
    this.tempCustomData.push({
      kana: '',
      romaji: '',
      example_jp: '',
      example_romaji: '',
      example_cn: '',
      example_en: ''
    });
    this.renderEntries();
    
    // 滚动到底部
    const container = document.getElementById('entriesList');
    container.scrollTop = container.scrollHeight;
  }

  deleteEntry(index) {
    if (this.tempCustomData.length <= 1) {
      alert('至少保留一个词条');
      return;
    }
    this.tempCustomData.splice(index, 1);
    this.renderEntries();
  }

  resetToDefault() {
    if (confirm('确定要重置为默认词库吗？')) {
      this.tempCustomData = JSON.parse(JSON.stringify(DEFAULT_GOJUON_DATA));
      this.renderEntries();
    }
  }

  async saveSettings() {
    const useCustom = document.getElementById('useCustomToggle').checked;
    
    // 验证数据
    const validData = this.tempCustomData.filter(item => 
      item.kana.trim() !== '' || item.romaji.trim() !== ''
    );
    
    if (validData.length === 0) {
      alert('请至少添加一个有效词条');
      return;
    }
    
    // 保存设置
    await StorageManager.setUseCustom(useCustom);
    await StorageManager.saveCustomData(validData);
    
    // 更新应用状态
    this.useCustom = useCustom;
    this.customData = validData;
    this.data = await StorageManager.getActiveData();
    
    // 重置索引
    this.currentIndex = 0;
    await StorageManager.saveCurrentIndex(this.currentIndex);
    
    // 更新显示
    this.updateDisplay();
    this.updateProgress();
    
    // 关闭弹窗
    this.closeSettings();
  }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new GojuonApp();
});
