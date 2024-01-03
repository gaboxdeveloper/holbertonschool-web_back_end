#!/usr/bin/env python3
"""3. Tasks, write a function task_wait_random that takes an integer"""
wait_random = __import__('0-basic_async_syntax').wait_random
import asyncio


def task_wait_random(max_delay: int) -> asyncio.Task:
    """task_wait_random function"""
    return asyncio.create_task(wait_random(max_delay))
