export default {
  id: "engram",
  server: async () => ({
    tool: {
      "engram_hello": {
        description: "Verifica se o plugin Engram foi carregado corretamente",
        args: [],
        execute: async () => "✓ Plugin Engram carregado com sucesso!"
      }
    }
  })
}
