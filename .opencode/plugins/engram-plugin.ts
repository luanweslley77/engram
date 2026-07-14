import { tool } from "@opencode-ai/plugin";

export const EngramPlugin = async () => {
  return {
    tool: {
      engram_hello: tool({
        description: "Engram plugin verification tool. Returns a greeting confirming the engram plugin is loaded.",
        args: {
          name: tool.schema.string().describe("Name to greet"),
        },
        async execute(args) {
          return `Hello ${args.name}! Engram plugin is loaded and working.`;
        },
      }),
    },
  };
};
