import os
import re

def createKeywordTags(sFile):
    
    return sFile

sRoot = './content'
for sDir, subdirList, vFiles in os.walk(sRoot):
    print('Found directory: %s' % sDir)
    for sFile in vFiles:
        print('\t%s' % sFile)
        f = open(os.path.join(sDir,sFile), 'r')
        sFile = f.read()
        f.close()
        
        sFile = createKeywordTags(sFile)
        print(sFile)