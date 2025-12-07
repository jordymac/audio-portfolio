from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_id = "Qwen/Qwen-7B"  # Choose a model: Qwen-7B, Qwen-1.8B, etc.
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, device_map="auto")

def generate(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True)
    outputs = model.generate(
        **inputs,
        max_new_tokens=100,
        temperature=0.2
    )
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

if __name__ == "__main__":
    user_input = "What is the capital of France?"
    print(generate(user_input))
