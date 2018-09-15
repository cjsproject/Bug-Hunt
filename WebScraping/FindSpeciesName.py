import requests
from bs4 import BeautifulSoup

def FindOGTitle(soup):
    return soup.find('head').find('meta', {'property':'og:title'})

def FindOGTitle():
    asdf

def PrintImagesMeta(images):
    for image in images:
        if image.has_attr('alt'):
            print("alt: "+ image['alt'])
        if image.has_attr('title'):
            print("title: "+ image['title'])

page1 = requests.get("https://www.inaturalist.org/taxa/129350-Photinus-pyralis")
page2 = requests.get("https://bugguide.net/node/view/898022")
soup1 = BeautifulSoup(page1.content, 'html.parser')
soup2 = BeautifulSoup(page2.content, 'html.parser')
imageTitle1 = soup1.find('head').find('title').contents
imageTitle2 = soup2.find('head').find('title').contents
imageOGTitle1 = soup1.find('head').find('meta', {'property':'og:title'}).contents
imageOGTitle2 = soup2.find('head').find('meta', {'property':'og:title'})

print(imageTitle1)
print(imageTitle2)
print(imageOGTitle1)
print(imageOGTitle2)

print('success')
