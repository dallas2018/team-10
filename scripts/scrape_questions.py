import urllib.request
import re
from bs4 import BeautifulSoup as bf
from urllib.request import Request, urlopen, build_opener

base_url = 'https://www.tfaforms.com/429640'

opener = build_opener()
page = opener.open(base_url)
soup = bf(page, 'lxml')
for i in (soup.findAll('fieldset', {'class': 'section column'})):
    print(i.select('legend')[0].text)
    print('--------------------------------------')