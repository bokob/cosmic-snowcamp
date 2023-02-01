from fastapi import FastAPI

from pydantic import BaseModel

import os

class Item(BaseModel):
    food_name: str
    description: str
    

app = FastAPI()

@app.get("/foods") # 음식 조회
async def read():
    file_list = os.listdir('../db')
    file_name = []
    for file in file_list:
        if(file.count(".") == 1):   # 파일 이름에 확장자 포함 '.' 하나
            name = file.split('.')[0]
            file_name.append(name)
        else:   # 파일 이름에 확장자 포함 '.'이 2개 이상
            for k in range(len(file)-1,0,-1):
                if file[k]=='.':
                    file_name.append(file[:k])
                    break

    file_content = []
    for name in file_name:
        with open(f'../db/{name}.txt','r') as f:
            content = f.read()
        file_content.append(content)

    food_list = []
    for i in range(len(file_name)):
        temp = {'foodName':file_name[i], 'description':file_content[i]}
        food_list.append(temp)
        
    return {"foods":food_list}
    

@app.get("/foods-num")  # 음식 개수 세기
async def countfood():
    count = len(os.listdir('../db'))
    return {'foodsNum' : count}

@app.post("/addfood")   # 음식 추가
async def add(item : Item):
    f=open(f'../db/{item.food_name}.txt','a')
    f.write(item.description)
    f.close()
    return item

@app.post("/deletefood")    # 음식 삭제
async def delete(item : Item):

    if(os.path.exists(f'../db/{item.food_name}.txt')):
        os.remove(f'../db/{item.food_name}.txt')
        return {"deleted_food_name": item.food_name}
    return {'deleted_food_name': '지울게 없는뎁쇼?'}