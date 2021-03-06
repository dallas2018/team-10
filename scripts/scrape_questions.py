import urllib.request
import re
from bs4 import BeautifulSoup as bf
from urllib.request import Request, urlopen, build_opener
import json

base_url = 'https://www.tfaforms.com/429640'

upper_dct = {}
temp_question = ''
temp_choice = []

opener = build_opener()
page = opener.open(base_url)
soup = bf(page, 'lxml')
for i in (soup.findAll('fieldset', {'class': 'section column'})):
    dct = {}
    title = i.select('legend')[0].text
    print("section title: ", i.select('legend')[0].text)
    print('--------------------------------------')
    # getting options
    # sub-categories
    # print(i.prettify())
    if i.fieldset:
        print('sub section title: ', i.fieldset.legend)
    public_assist = i.findAll('div', {'class': 'htmlContent'})
    if public_assist != []:
        temp_question = public_assist[0].text
        dct[temp_question] = []
    print("finding question: ", i.findAll('div', {'class':'htmlContent'}))
    for j in (i.findAll('label', {'class': 'label'})):
        print(j)
        if not j.span:
            print("question: ", j.text)
            temp_question = j.text
            dct[temp_question] = []
        else:
            print('choice: ', j.text)
            dct[temp_question].append(j.text)
        if j.find_next_siblings('div') != []:
            # print("option div: ", j.find_next_siblings('div')[0].prettify())
            options = j.find_next_siblings('div')[0].findAll('option')
            if options != []:
                # print("dropdown: ", options[0].text)
                for x in options:
                    dct[temp_question].append(x.text)
                    print('choice: ', x.text)
    upper_dct[title] = dct

type = 'dropdown'
print(json.dumps(upper_dct, indent=2))
master_dct = {}
<<<<<<< HEAD
=======
for title, questions in upper_dct.items():
    master_dct[title] = []
    for question, answer in questions.items():
        if not answer:
            type = 'text'
        else:
            type = 'dropdown'
        if 'Yes' in answer:
            type = 'checkbox'
        master_dct[title].append({'question': question, 'answer': answer,
            'type': type, 'var_name': 'hello'}) 
>>>>>>> 09fc6decb6cd67ecbb41d9720e5c92590ddd3004

master_dct[title] = []
for question, answer in questions.items():
    if not answer:
        type = 'text'
    else:
        type = 'dropdown'
    if 'Yes' in answer:
        type = 'checkbox'
    master_dct[title].append({'question': question, 'answer': answer,
        'type': type}) 

with open('answerandtype.json', 'w') as f:
    json.dump(master_dct, f, indent=2)