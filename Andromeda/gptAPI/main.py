import openai

openai.api_key = "ChatGPT_API_KEY_HERE"
prompt = "List 10 animals"

response = openai.ChatCompletion.create(model="gpt-3.5-turbo",  messages=[
                {"role": "system", "content": prompt }
            ])

print(response)
