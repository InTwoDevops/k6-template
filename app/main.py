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


# 2. Sync endpoint doing async job
@app.get("/sync-async")
def sync_async():
    async def async_job():
        await asyncio.sleep(2)  # Simulate async job

    asyncio.run(async_job())  # Run async job in sync context
    return {"message": "Sync endpoint doing async job"}


# 3. Async endpoint doing sync job
@app.get("/async-sync")
async def async_sync():
    def sync_job():
        time.sleep(2)  # Simulate sync job

    await asyncio.to_thread(sync_job)  # Run sync job in a thread
    return {"message": "Async endpoint doing sync job"}


# 4. Async endpoint doing async job
@app.get("/async-async")
async def async_async():
    await asyncio.sleep(2)  # Simulate async job
    return {"message": "Async endpoint doing async job"}
