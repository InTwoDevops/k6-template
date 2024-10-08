# app/main.py
from fastapi import FastAPI
import time
import asyncio

app = FastAPI()


# 1. Sync endpoint doing sync job
@app.get("/sync-sync")
def sync_sync():
    time.sleep(2)  # Simulate sync job
    return {"message": "Sync endpoint doing sync job"}


# 2. Async endpoint doing sync job
@app.get("/async-sync")
async def async_sync():
    time.sleep(2)  # Simulate sync job
    return {"message": "Async endpoint doing sync job"}


# 3. Async endpoint doing async job
@app.get("/async-async")
async def async_async():
    await asyncio.sleep(2)  # Simulate async job
    return {"message": "Async endpoint doing async job"}
