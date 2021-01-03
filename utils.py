import re

def is_match(line):
    return re.search(r'type', line)

def get_type_name(line):
    return re.findall(r'\b(?:(?!export|type|=|{)\w)+\b', line)[0]
