#!/usr/bin/env python3
""" List all documents in Python"""


if __name__ == "__main__":
    """Function initial"""
    from pymongo import MongoClient

    def list_all(mongo_collection):
        """[Function that lists all documents in a collection]
        """
        return mongo_collection.find()
