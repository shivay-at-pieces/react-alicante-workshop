# React Alicante Ollama Workshop

## Prerequisites

Here are the requirements :

- Install Nodejs - https://nodejs.org/en/download/package-manager/current
- Install VS Code - https://code.visualstudio.com/download
- Install Ollama - https://ollama.com/download

Inside Ollama: 
- Have LLama3 Model pre-installed: 
For this one can follow this tutorial: 
https://medium.com/@sealteamsecs/local-llm-installation-guide-install-llama3-using-ollama-ef8cf68bb461

## Installation

The application we'll be building today is using [Vite](https://vitejs.dev/), a build tool for modern JavaScript (and TypeScript) applications.

We need to set up the initial, bootstrapped application for this workshop. Run the following commands to set it up:

```bash
cd alicante-workshop
npm install
npm run dev
```

Go the link displayed in your terminal, you should be seeing the intial application.

# Excercises 


# Exercise 1

To interface with the LLMs from Ollama, we need to install a library called LangChain:

npm install langchain @langchain/community/llms/ollama

After the installation is complete, you should add a new file called .env in the root of your Vite application and add the following environment variable:


Next, we'll create a new file called src/utils/langchain.ts and add the following code:

src/utils/langchain.ts


```
export async function generateAnswer(question: string) {
    let answer = '';

    try {
        answer = await llm.invoke(question);
    } catch (e) {
        return 'Something went wrong';
    }

    return answer;
}

```

To test if what we've done is working, create new file called src/utils/langchain.test.ts and write a test for the function generateAnswer.

Take the following code and modify it so the test will succeed:

src/utils/langchain.test.ts
```
import { describe, it, assert } from 'vitest';
import { generateAnswer } from './langchain';

describe('LangChain', () => {
    it('Answers a question', async () => {
       //         // 1. Add your own question here

        const answer = await generateAnswer('Is United Kingdom a country, answer "yes" or "no" only.');
       //         // 2. Match the answer from the LLM to a predicted value

        assert.equal(answer.trim().toLowerCase(), "yes");
    });
});
```
Run npm run test to run the above test. Make sure your test is succeeding.

Hint: Be explicit of what you expect the LLM to return.