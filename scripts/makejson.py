import json

Questions = {
  'General': [
    {
      'Question':'First Name',
      'Answer':[],
      'Type':'Text'
    },
    {
      'Question':'Last Name',
      'Answer':[],
      'Type':'Text'
    }
  ]
}

test = open("test.json", "w")
json.dump(Questions, test)