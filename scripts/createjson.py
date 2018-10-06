import json

file = open("./Questions/pg1questions.csv", "r")
a = file.read().replace("\n", "")
print(a)
