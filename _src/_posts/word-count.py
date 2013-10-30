from glob import glob
from os.path import isfile
def countwords(fp):
   with open(fp) as fh:
       return len(fh.read().split())
print sum(map(countwords, filter(isfile, glob("*.md") ) ) )