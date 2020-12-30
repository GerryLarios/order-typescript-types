import re
import os
import argparse

parser = argparse.ArgumentParser(description="Script that orders alphabetically a typescript file with types on it")
parser.add_argument("--file", type=str, help="File containing the typescript's types")
parser.add_argument("--output", type=str, default="orderTypes.ts",help="File containing the ordered types")

args = parser.parse_args()
file_name = args.file
output_file_name = args.output

original_file = open(file_name, "r")
lines = original_file.readlines()
output_file = open(output_file_name, "w+")

def write(text):
    output_file.write(text + os.linesep)
    output_file.write(os.linesep)

def is_match(line):
    return re.search(r'type', line)

def get_type_name(line):
    return re.findall(r'\b(?:(?!export|type|=|{)\w)+\b', line)[0]

count = 0
list_types = []

for line in lines:
    count += 1
    if is_match(line):
        list_types.append(get_type_name(line))


list_types.sort()

for word in list_types:
    print(word)
