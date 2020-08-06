# Packages that contain useful code for us to use
import os           # Lets us do file operations
import re           # Regular Expressions!
import pyperclip    # Let's us copy to the clipboard

# The RegEx string we're going to use to extract the desired text
reKeywordEntries = '\[([^\]]+)\]\(([^\)]+)\)'

# Print a bunch of blank lines to separate each run's output
print('\n'*100)

# Define the directory to start from
sBaseDir = '../content/province'
# sBaseDir = 'test_data'

# This list will hold all of the keywords we find
vKeywords = []

# Navigate the directory tree start at a predefined root directory
for sRoot, vDirs, vFiles in os.walk(sBaseDir):
    
    # Loop through all the files in the current directory
    for sFilename in vFiles:
        _, sExt = os.path.splitext(sFilename)   # Get file extension (looking for .md)
        
        # Work with only .md files, but not with any _index.md files
        # This leaves only the entries proper
        if sExt == '.md' and not sFilename == '_index.md':
            
            print(sFilename)
            
            with open(os.path.join(sRoot,sFilename),'r') as f:
                sFile = f.read()
                f.close()
                
            iStart = sFile.find('## Keywords')
            sKeywords = sFile[iStart+12:]
            iEnd = sKeywords.find('#')
            sKeywords = sKeywords[:iEnd].strip()
            
            for tMatch in re.findall(reKeywordEntries, sKeywords):
                if not tMatch in vKeywords:
                    vKeywords.append(tMatch)

# Make one list of all the keywords
sKeywordList = ''
for tKeyword in vKeywords:
    sKeywordList += '%s\t%s\n' % tKeyword

sKeywordList = sKeywordList.strip()

# Save that list to a file
with open('keywords.txt', 'w') as f:
    f.write(sKeywordList)
    f.close()

# Copy the list to the clipboard (for pasting in Google Sheet)
pyperclip.copy(sKeywordList)

# Print it out for us to see
print(sKeywordList)