# PN Smart Energy — 官网新版（测试）

PN Smart Energy (NASDAQ: PN) 官方网站重设计，中英双语可切换，静态多页面站点（v5）。

## 页面结构

| 文件 | 导航 | 内容 |
|---|---|---|
| `index.html` | 首页 | 精简首屏、与 IR 官网一致的公司介绍、业务入口、电站案例、产品展示、ESG / IR 入口 |
| `about.html` | About | 公司介绍、发展战略（天马战略）、发展历程、行业认可、联系我们 |
| `business.html` | Business | 电站投资运营、EPC 工程与智慧运维、EMC 合作模式；10 座电站案例（地图 / 装机分布 / 详情弹层） |
| `product.html` | Product | 贸易板块介绍、PNTECH 线缆与连接器、户用光储、工商业储能、品牌合作 |
| `esg.html` | ESG | 绿色价值与 ESG 治理框架 |
| `investors.html` | Investor Relations | 按 IR 官网框架的公司简介、IR 栏目跳转、管理团队、最新动态、IR 联系 |

- `assets/site.css`、`assets/site.js`：各页共用的样式与脚本（含中英文文案、电站与产品数据）
- `assets/*.webp|png|jpg`：图片资源（按需懒加载）；`og.jpg` 为分享卡片图
- `sitemap.xml`、`robots.txt`：搜索引擎索引
- 深链：`business.html#plant-<id>` 直接打开电站详情；`product.html#ci` 等打开产品页签；`?lang=en` 强制语言

通过 GitHub Pages 发布：Settings → Pages → Deploy from a branch → `main` / `/ (root)`

访问地址：https://wulei0716.github.io/pn-smart-energy-site/
