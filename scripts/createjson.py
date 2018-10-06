import json

questionfile = open("./Questions/pg1questions.csv", "r")
titlesfile = open("./Questions/pg1legendtitles.csv", "r")

questionstring = questionfile.read()
questionlist = questionstring.split(",\n")

titlestring = titlesfile.read()
titlelist = titlestring.split(",\n")

Questions = {titlelist[0][1:-1]:[]}

counter = 0

for i in questionlist:
  
  if(i == "break"):
    counter+=1
    Questions[titlelist[counter][1:-1]] = []
    continue
  
  Questions[titlelist[counter][1:-1]].append({'Question':i[1:-1],'Answer':[], 'Type':''})
  
print(Questions)

test = open("othertest.json", "w")
json.dump(Questions, test)
