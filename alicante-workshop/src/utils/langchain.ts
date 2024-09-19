import { Ollama } from "@langchain/community/llms/ollama";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "llama3"
});

export async function generateAnswer(
    question: string,
    promptTemplate: string = "Take the role of a personal travel assistant, and answer the following question in detail: {question}?"
) {
    let answer = ''

    const prompt = PromptTemplate.fromTemplate(
        promptTemplate
    );

    const formattedPrompt = await prompt.format({
        question,
    });

    try {
        answer = await llm.invoke(formattedPrompt);
    } catch (e) {
        return 'Something went wrong'
    }

    return answer
}