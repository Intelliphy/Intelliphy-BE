import dotenv from "dotenv";

dotenv.config();

// Hf Modules
import { HfInference } from "@huggingface/inference";

const hf_key = process.env.HUGGINGFACE_API_KEY;
const inference = new HfInference(hf_key);

(async () => {
  try {
    const out = await inference.chatCompletion({
      // model: "google/gemma-2-9b-it",
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "user",
          content: "I live in New York. How's the weather today?",
        },
      ],
      max_tokens: 512,
      temperature: 0.5,
    });

    console.log({ out });
    console.log(out.choices[0]);
  } catch (error) {
    console.log(error);
  }
})();
