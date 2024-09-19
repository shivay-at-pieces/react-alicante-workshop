import { Ollama } from "@langchain/community/llms/ollama";

const llm = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "llama3"
});

export async function generateAnswer(question: string) {
    let answer = '';

    try {
        answer = await llm.invoke(question);
    } catch (e) {
        return 'Something went wrong';
    }

    return answer;
}