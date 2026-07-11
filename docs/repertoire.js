const songs = [
  { title: '渔舟唱晚', category: 'traditional', label: '经典名曲', featured: true, advance: true },
  { title: '高山流水', category: 'traditional', label: '古韵悠远', featured: true, advance: true },
  { title: '春江花月夜', category: 'traditional', label: '典雅舒展', advance: true },
  { title: '将军令', category: 'traditional', label: '铿锵大气', advance: true },
  { title: '梅花三弄', category: 'traditional', label: '清雅古朴', advance: true },
  { title: '汉宫秋月', category: 'traditional', label: '含蓄深沉', advance: true },
  { title: '月儿高', category: 'traditional', label: '传统雅乐', advance: true },
  { title: '四段锦', category: 'traditional', label: '古朴端庄', advance: true },

  { title: '寒鸦戏水', category: 'regional', label: '潮州筝派', featured: true, advance: true },
  { title: '出水莲', category: 'regional', label: '客家筝派', featured: true, advance: true },
  { title: '秦桑曲', category: 'regional', label: '陕西筝派', advance: true },
  { title: '汉江韵', category: 'regional', label: '河南筝派', advance: true },
  { title: '香山射鼓', category: 'regional', label: '陕西风格', advance: true },
  { title: '林冲夜奔', category: 'regional', label: '浙江筝派', advance: true },

  { title: '战台风', category: 'contemporary', label: '现代经典', featured: true, advance: true },
  { title: '雪山春晓', category: 'contemporary', label: '壮美明朗', featured: true, advance: true },
  { title: '丰收锣鼓', category: 'contemporary', label: '喜庆热烈', advance: true },
  { title: '东海渔歌', category: 'contemporary', label: '海韵欢腾', advance: true },
  { title: '云裳诉', category: 'contemporary', label: '大型叙事', advance: true },
  { title: '临安遗恨', category: 'contemporary', label: '历史叙事', advance: true },
  { title: '西域随想', category: 'contemporary', label: '异域色彩', advance: true },
  { title: '茉莉芬芳', category: 'contemporary', label: '清新抒情', advance: true },

  { title: '好日子', category: 'wedding', label: '喜庆开场', featured: true },
  { title: '甜蜜蜜', category: 'wedding', label: '温柔浪漫' },
  { title: '金玉良缘', category: 'wedding', label: '婚礼推荐', featured: true },
  { title: '传奇', category: 'wedding', label: '浪漫经典' },
  { title: '如愿', category: 'wedding', label: '深情典雅', featured: true },
  { title: '红豆', category: 'wedding', label: '含蓄温柔' },
  { title: '荷塘月色', category: 'wedding', label: '柔美舒缓' },

  { title: '青花瓷', category: 'elegant', label: '东方雅韵', featured: true },
  { title: '兰亭序', category: 'elegant', label: '诗意古典' },
  { title: '烟花易冷', category: 'elegant', label: '清冷叙事' },
  { title: '声声慢', category: 'elegant', label: '婉转悠长' },
  { title: '女儿情', category: 'elegant', label: '古典柔情', featured: true },
  { title: '春不晚', category: 'elegant', label: '春日雅集' },
  { title: '清明雨上', category: 'elegant', label: '清雅含蓄' },
  { title: '上春山', category: 'elegant', label: '明快国风' },
  { title: '万疆', category: 'elegant', label: '大气国风', featured: true },
  { title: '盛世国乐', category: 'elegant', label: '典礼华章' },

  { title: '刀剑如梦', category: 'heroic', label: '江湖豪情' },
  { title: '笑红尘', category: 'heroic', label: '洒脱侠气', featured: true },
  { title: '霍元甲', category: 'heroic', label: '节奏燃场', featured: true },
  { title: '偷功', category: 'heroic', label: '功夫主题' },
  { title: '天下', category: 'heroic', label: '大气磅礴' },
  { title: '明月天涯', category: 'heroic', label: '国风江湖' },
  { title: '不畏侠', category: 'heroic', label: '轻快侠气' },
  { title: '爱江山更爱美人', category: 'heroic', label: '经典侠韵' },
  { title: '霜雪千年', category: 'heroic', label: '古风叙事' },

  { title: '上海滩', category: 'classic', label: '怀旧经典', featured: true },
  { title: '情深深雨濛濛', category: 'classic', label: '影视金曲' },
  { title: '爱似水仙', category: 'classic', label: '流行抒情' },
  { title: '生生世世爱', category: 'classic', label: '仙侠金曲' },
  { title: '多情种', category: 'classic', label: '流行国风' },
  { title: '护花使者', category: 'classic', label: '复古动感' },

  { title: '云宫迅音', category: 'lively', label: '氛围燃场', featured: true },
  { title: '一笑江湖', category: 'lively', label: '热门互动' },
  { title: '鸳鸯戏', category: 'lively', label: '节奏国风' },
  { title: '卜卦', category: 'lively', label: '打鼓摇指' },
  { title: '市集', category: 'lively', label: '灵动轻快' },
  { title: '牵丝戏', category: 'lively', label: '戏韵国风' }
];

const categoryNames = {
  all: '全部曲目',
  traditional: '传统名曲',
  regional: '流派代表',
  contemporary: '现代创作',
  wedding: '婚礼喜宴',
  elegant: '国风雅韵',
  heroic: '武侠燃场',
  classic: '流行经典',
  lively: '轻快互动'
};

const grid = document.querySelector('#songGrid');
const search = document.querySelector('#songSearch');
const filterButtons = document.querySelectorAll('.filter-button');
const resultCount = document.querySelector('#resultCount');
const activeCategory = document.querySelector('#activeCategory');
const emptyState = document.querySelector('#emptyState');
let currentFilter = 'all';

function renderSongs() {
  const keyword = search.value.trim().toLowerCase();
  const filtered = songs.filter(song => {
    const inCategory = currentFilter === 'all' || song.category === currentFilter;
    const matchesSearch = song.title.toLowerCase().includes(keyword) || song.label.includes(keyword);
    return inCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map((song, index) => `
    <article class="song-card" style="--delay:${Math.min(index, 11) * 35}ms">
      <span class="song-number">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <p>${categoryNames[song.category]}</p>
        <h3>${song.title}</h3>
      </div>
      <span class="song-mood">${song.label}</span>
      ${song.featured ? '<span class="recommended">推荐</span>' : ''}
      ${song.advance ? '<span class="advance-tag">需提前沟通</span>' : ''}
    </article>
  `).join('');

  resultCount.textContent = filtered.length;
  activeCategory.textContent = keyword ? `“${search.value.trim()}” 的搜索结果` : categoryNames[currentFilter];
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    renderSongs();
  });
});

search.addEventListener('input', renderSongs);
document.querySelector('#songTotal').textContent = songs.length;
renderSongs();
