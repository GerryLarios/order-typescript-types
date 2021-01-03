import os
import argparse
from utils import is_match
from typescript_model import TypescriptModel

parser = argparse.ArgumentParser(description="Script that orders alphabetically a typescript file with types on it")
parser.add_argument("--file", type=str, help="File containing the typescript's types")
parser.add_argument("--output", type=str, default="orderTypes.ts",help="File containing the ordered types")

args = parser.parse_args()
file_name = args.file
output_file_name = args.output

original_file = open(file_name, "r")
lines = original_file.readlines()
output_file = open(output_file_name, "w+")

list_types = []

for line in lines:
    if line != "\n":
        if is_match(line):
            list_types.append(TypescriptModel(line))
        else:
            list_types[len(list_types) - 1].push_property(line)

list_types.sort(key=lambda x: x.name) # order the list of objects by an attribute

for model in list_types:
    output_file.write(model.name)
    for prop in model.properties:
        output_file.write(prop)
    output_file.write(os.linesep)

print(f"Done! {output_file_name} created.")
