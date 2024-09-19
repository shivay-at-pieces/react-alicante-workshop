// import { Ollama } from "@langchain/community/llms/ollama";
// import { PromptTemplate } from "@langchain/core/prompts";

// const llm = new Ollama({
//     baseUrl: "http://localhost:11434",
//     model: "llama3",
//     temperature: 0
// });

// export async function generateAnswer(
//     question: string,
//     promptTemplate: string = "Take the role of a personal travel assistant, and answer the following question in detail: {question}?"
// ) {
//     let answer = ''

//     const prompt = PromptTemplate.fromTemplate(
//         promptTemplate
//     );

//     const formattedPrompt = await prompt.format({
//         question,
//     });

//     try {
//         answer = await llm.invoke(formattedPrompt);
//     } catch (e) {
//         return 'Something went wrong'
//     }

//     return answer
// }


import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
    temperature: 0
});

export async function generateAnswer(
    question: string,
    promptTemplate: string = "Take the role of a {role}, that answers questions in a {style} way.",
    role: string = "Personal travel assistant",
    style: string = "consistent"
) {
    let answer = '';

    const chatPrompt = ChatPromptTemplate.fromMessages([
        ["system", promptTemplate],
        ["human", "{question}"],
    ]);

    const formattedPrompt = await chatPrompt.formatMessages({
        role,
        style,
        question
    });
    
    try {
        const result = await llm.invoke(formattedPrompt);
        answer = result?.content as string;
    } catch (e) {
        return 'Something went wrong';
    }

    return answer;
}