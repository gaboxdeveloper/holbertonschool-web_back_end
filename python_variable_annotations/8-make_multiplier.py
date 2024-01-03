#!/usr/bin/env python3
"""type-annotated function make_multiplier that takes a float multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """make_multiplier function"""
    return lambda x: x * multiplier
