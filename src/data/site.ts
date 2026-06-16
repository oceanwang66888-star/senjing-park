// 全站统一的品牌/联系信息（NAP: Name-Address-Phone）单一数据源。
// 务必在这里改，不要在各页面里分别硬编码——保证官网、美团、抖音、小红书等平台信息一致，
// 这是 GEO 和本地搜索排序的重要信号。
//
// 【待补充】统一社会信用代码、Logo 图片路径、门牌号/精确坐标（建议接入高德地图 POI）。

export const site = {
  brandName: '贵州森境自然教育公园',
  legalName: '修文鑫鸿彬植物园',
  tagline: '贵州首家蝴蝶主题自然教育基地',
  address: '贵州省贵阳市修文县放马坪（朝阳村附近）',
  phone: '0851-XXXXXXX（待确认）',
  wechatService: '待补充企业微信号',
  openingHours: '09:00-17:30',
  travelTimeFromGuiyang: '约50分钟车程',
  socialAccounts: {
    douyin: '待开通',
    xiaohongshu: '待开通',
    weixinChannel: '待开通',
  },
} as const;
