class UserSchema:
    def __init__(self, mongo):
        self.mongo = mongo
        self.users_collection = mongo.db.users

    def create_user(self, user_data):
        user_id = self.users_collection.insert_one(user_data).inserted_id
        return user_id

    def find_user_by_email(self, email):
        return self.users_collection.find_one({"email": email})
