import os
prob_code = input("Problem Code: ")
prob_title = input("Problem Title: ")
folder_name = f'{prob_code} - {prob_title}'
invalid_chars = ['/', '\\', ':', '*', '?', '"', '<', '>', '|']
folder_name_updated = ""
for i in folder_name:
    if i in invalid_chars:
        folder_name_updated += '_'
    else:
        folder_name_updated += i
os.mkdir(folder_name_updated)
f_path = os.path.join(os.path.abspath(os.curdir), folder_name_updated, 'Main')
open(f"{f_path}.py", "x")
open(f"{f_path}.c", "x")
open(f"{f_path}.cpp", "x")
open(f"{f_path}.java", "x")
open(f"{f_path}.js", "w").write("let inputs = require('fs').readFileSync('/dev/stdin', 'utf8').split('\\n');\n")
