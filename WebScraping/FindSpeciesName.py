import requests
import json
from bs4 import BeautifulSoup
from flask import Flask
from flask import request

app = Flask(__name__)

class PageMetaData:
    def __init__(self):
        self.title = ""
        self.OGtitle = ""
        self.count = 0

def GetNames(metaData):
    metaData.title = metaData.title.split(string.punctuation)[0]
    metaData.OGtitle = metaData.OGtitle.split(string.punctuation)[0]

def ScrapMetaData(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    metaData = PageMetaData()
    if soup.find('head').has_attr('title'):
        metaData.title = soup.find('head').find('title').contents
    if soup.find('head').has_attr('meta', {'property':'og:title'}):
        metaData.OGtitle = soup.find('head').find('meta', {'property':'og:title'}).contents
    return metaData

def BuildSpeciesList(urlList):
    dataList = []
    for url in urlList:
        metaDataList.append(ScrapMetaData(url))
    for metaData in dataList:
        GetNames(metaData)
    return dataList

# begin here
@app.route('/', methods=['POST', 'GET'])
def urlList():
    rawList = request.args.get('id')
    return 0;


app.run()

#with open("../Data/json.txt") as f:
#    data = json.loads(f)



#page1 = requests.get("https://www.inaturalist.org/taxa/129350-Photinus-pyralis")
#page2 = requests.get("https://bugguide.net/node/view/898022")
#soup1 = BeautifulSoup(page1.content, 'html.parser')
#soup2 = BeautifulSoup(page2.content, 'html.parser')
#imageTitle1 = soup1.find('head').find('title').contents
#imageTitle2 = soup2.find('head').find('title').contents
#imageOGTitle1 = soup1.find('head').find('meta', {'property':'og:title'}).contents
#imageOGTitle2 = soup2.find('head').find('meta', {'property':'og:title'})

#print(imageTitle1)
#print(imageTitle2)
#print(imageOGTitle1)
#print(imageOGTitle2)

#print('success')
