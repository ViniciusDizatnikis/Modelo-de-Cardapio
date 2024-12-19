module.exports = {
  content: [
    './*.html', // Arquivos HTML na raiz do projeto
    './src/**/*.{js,ts,jsx,tsx}', // Arquivos JS/TS
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/fundo.png')"
      }
    },
  },
  plugins: [],
};