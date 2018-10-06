import json

questionfile = open("./Questions/pg1questions.csv", "r")
titlesfile = open("./Questions/pg1legendtitles.csv", "r")

questionstring = questionfile.read()
questionlist = questionstring.split(",\n")

titlestring = titlesfile.read()
titlelist = titlestring.split(",\n")

Questions = {titlelist[0][1:-1]:[]}

counter = 0
c2 = 0
myjson = open("parseme.json", "r")
jsonstr = myjson.read()
d2 = json.loads(jsonstr)
mylist = d2["questions"]["Contact Information"]
for i in questionlist:
  
  if(i == "break"):
    counter+=1
    Questions[titlelist[counter][1:-1]] = []
    continue
  
  print(i)
  print(mylist[c2])
  
  Questions[titlelist[counter][1:-1]].append({'Question':i[1:-1],'Answer':mylist[c2]["answer"], 'Type':mylist[c2]["type"]})
  c2+=1
  
print(Questions)


test = open("othertest.json", "w")
json.dump(Questions, test)
