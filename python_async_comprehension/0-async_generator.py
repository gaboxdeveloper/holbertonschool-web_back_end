#!/usr/bin/env python3
"""
	write a coroutine called async_generator that takes no arguments
"""
from asyncio import sleep
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """async_generator"""
    for _ in range(10):
        await sleep(1)
        yield random.uniform(0, 10)
