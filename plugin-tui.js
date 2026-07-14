import { tool } from "@opencode-ai/plugin";

export default {
  tui: async () => ({
    tool: {
      engram_hello: tool({
        description: "Verifica se o plugin Engram foi carregado corretamente no OpenCode.",
        args: {
          name: tool.schema.string().describe("Seu nome"),
        },
        async execute(args) {
          return `Olá ${args.name}! Plugin Engram carregado com sucesso.`;
        },
      }),
    },
  }),
};
