export default {
  'packs/**/*.{yml,yaml}': (files) => [
    `prettier --write ${files.map((f) => `"${f}"`).join(' ')}`,
  ]
};