from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware # 追加
from routers import excel

app = FastAPI()

# CORSを回避するために追加（今回の肝）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)

app.include_router(excel.router)
