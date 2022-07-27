from fastapi import FastAPI

from routers import excel

app = FastAPI()
app.include_router(excel.router)
