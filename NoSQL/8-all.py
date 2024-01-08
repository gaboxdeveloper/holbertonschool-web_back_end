#!/usr/bin/env python3
""" List all documents in Python"""


def list_all(mongo_collection):
    """Function that lists all documents in a collection"""
    if not mongo_collection:
        return []
    return db.mongo_collection.find()
