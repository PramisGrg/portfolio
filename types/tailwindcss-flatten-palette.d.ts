// tailwindcss-flatten-palette.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette.js" {
  const flattenColorPalette: (colors: Record<string>) => Record<string, string>;
  export default flattenColorPalette;
}
