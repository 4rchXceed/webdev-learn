import os
import json

html_files = {}
def python_to_js_string(python_str):
    # Convert the Python string to a valid JSON string.
    # This ensures that special characters are properly escaped for JavaScript.
    js_str = json.dumps(python_str)
    
    # Since JSON string representation already includes quotes, 
    # remove the surrounding quotes for JavaScript compatibility.
    return '"'+js_str[1:-1]+'"'

def analyse_dir(path: str) -> None:
    elements = os.listdir(path)
    for element in elements:
        if not element in (".", ".."):
            if os.path.isfile(path+"/"+element):
                if element.endswith(".html"):
                    if not "learn" in path:
                        html_files[path+"/"+element] = path+"/"+element
                elif "bdd/courses" in path:
                    pth = (path+"/"+element).split('./bdd/courses/')[1]
                    course_name = pth.split("/")[0]
                    if not pth.endswith("repo.js"):
                        is_blockcode = "blockcode" in pth
                        if is_blockcode:
                            chapiter_name = pth.split("ch")[1].split("assets")[0]
                        else:
                            chapiter_name = pth.split("ch")[1].split(".js")[0]
                        html_files[path+"/"+element] = f"./learn/{course_name}/chapters/{chapiter_name}.html"
                    else:
                        html_files[path+"/"+element] = f"./learn/{course_name}/index.html"

            else:
                analyse_dir(path+"/"+element)

analyse_dir("learn")
html_files["index.html"] = "index.html"
html_files["credits.html"] = "credits.html"
analyse_dir("./bdd")

print(html_files)
contents = {}

for file in html_files:
    with open(file, "r") as f_srce:
        if html_files[file] in contents:
            contents[html_files[file]] += "\n\n"+f_srce.read()
        else:
            contents[html_files[file]] = f_srce.read()

js_string = python_to_js_string(json.dumps(contents))

with open("out.js", "w") as f_srce:
    f_srce.write(js_string)