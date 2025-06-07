# Sass 样式指南

本项目使用 Sass 预处理器来简化 CSS 编程体验。以下是项目中 Sass 的组织结构和使用指南。

## 目录结构

```
assets/styles/
├── _mixins.scss        # 混合器和函数
├── variables.scss      # 全局变量
├── global.scss         # 全局样式
├── main.scss           # 主样式文件（导入其他文件）
├── components/         # 组件样式
│   ├── _project-card.scss
│   ├── _project-content.scss
│   └── index.scss      # 组件样式索引
└── README.md           # 本文档
```

## 使用指南

### 变量

项目中定义了一系列全局变量，包括颜色、尺寸、断点、间距、字体大小、字体权重和过渡等。使用这些变量可以保持设计的一致性。

```scss
// 颜色示例
color: $primary-color;
background-color: $bg-color;

// 间距示例
margin: $spacing-md;
padding: $spacing-lg $spacing-md;

// 字体示例
font-size: $font-size-lg;
font-weight: $font-weight-bold;
```

### 混合器

项目提供了多种混合器，用于简化常见的 CSS 模式：

#### 布局混合器

```scss
// 弹性布局
@include flex(column, center, flex-start);

// 网格布局
@include grid(repeat(3, 1fr), 20px);

// 定位
@include absolute(10px, 20px, auto, auto);
@include fixed(0, 0, 0, 0);
```

#### 响应式混合器

```scss
// 响应式断点
@include respond-to(mobile) {
  // 移动端样式
}

@include respond-to(tablet) {
  // 平板样式
}
```

#### 效果混合器

```scss
// 文本截断
@include text-truncate;

// 多行文本截断
@include multi-line-truncate(3);

// 阴影
@include mixins.shadow(light);
@include shadow(medium);
@include shadow(heavy);

// 过渡
@include transition(color, transform);
```

## 组件样式

组件样式位于 `components/` 目录下，每个组件都有自己的样式文件。在组件中使用 `<style lang="scss" scoped>` 标签来应用 Sass 样式。

```vue
<style lang="scss" scoped>
// 使用全局组件样式，只需添加特定于此页面的样式覆盖
.component {
  @include flex(column);
  padding: variable.$spacing-md;
  
  &:hover {
    @include shadow(medium);
  }
}
</style>
```

## 最佳实践

1. **使用变量**：始终使用变量而不是硬编码值，以保持一致性。
2. **使用混合器**：利用混合器简化代码并保持一致的样式模式。
3. **模块化**：将样式分解为小的、可重用的模块。
4. **嵌套适度**：避免过度嵌套，通常不超过 3 层。
5. **注释**：为复杂的样式块添加注释。
6. **响应式设计**：使用响应式混合器而不是直接编写媒体查询。

## 扩展

如需添加新的混合器或变量，请遵循现有的命名约定并更新本文档。