import json

with open('question.json', 'r') as f:
    x = json.load(f)

print(type(x))
for key, val in x['questions'].items():
    print(key)
    print(val)
    print("------")