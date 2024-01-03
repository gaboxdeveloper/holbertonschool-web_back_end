#!/usr/bin/env python
"""type-annotated function safe_first_element"""
from typing import Sequence, Any, Optional


# The types of the elements of the input are not known
def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """safe_first_element function"""
    if lst:
        return lst[0]
    else:
        return None
