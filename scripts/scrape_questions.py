import urllib.request
import re
from bs4 import BeautifulSoup as bf
from urllib.request import Request, urlopen, build_opener

base_url = 'https://www.tfaforms.com/429640'

opener = build_opener()
page = opener.open(base_url)
soup = bf(page, 'lxml')
for i in (soup.findAll('fieldset', {'class': 'section column'})):
    print("section title: ", i.select('legend')[0].text)
    print('--------------------------------------')
    # getting options
    # sub-categories
    print(i.prettify())
    if i.fieldset:
        print('sub section title: ', i.fieldset.legend)
    for j in (i.findAll('label', {'class': 'label'})):
        if not j.span:
            print("question: ", j.text)
        else:
            print('choice: ', j.text)
        if j.find_next_siblings('div') != []:
            print("option div: ", j.find_next_siblings('div')[0].prettify())
            options = j.find_next_siblings('div')[0].findAll('option')
            if options != []:
                print("dropdown: ", options[0].text)
        print('--------------------------------------')