from flask import Flask, request, jsonify, send_file
from flask_pymongo import PyMongo
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from bson import ObjectId
from pymongo import MongoClient
from gridfs import GridFS
import os

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'], allow_headers=['Content-Type'], methods=['POST'])
app.config['MONGO_URI'] = 'mongodb://localhost:27017/Try_On'
mongo = PyMongo(app)
users_collection = mongo.db.users

# MongoDB configuration for uploaded images
app.config['MONGO_URI_UPLOADS'] = 'mongodb://localhost:27017/Uploaded_Images'
mongo_upload = MongoClient('mongodb://localhost:27017')
db_upload = mongo_upload['Uploaded_Images']
fs = GridFS(db_upload)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

if not os.path.exists('uploads'):
    os.makedirs('uploads')


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/product/<int:product_id>", methods=["GET"])
def get_product_details(product_id):
    try:
        product = mongo.db.products.find_one({"id": product_id})
        print(product_id)
        if not product:
            return jsonify({"error": "Product not found"}), 404

        product['_id'] = str(product['_id'])

        return jsonify(product), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/products', methods=['GET'])
def get_products():
    products = list(mongo.db.products.find())

    # Convert ObjectId to string for each product
    for product in products:
        product['_id'] = str(product['_id'])

    # Return the products as JSON response
    return jsonify(products)


@app.route('/register', methods=['POST'])
def register():
    data = request.form

    name = data.get('name')
    contact_details = data.get('contact_details')
    address = data.get('address')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')
    image = request.files['image']

    if password != confirm_password:
        return jsonify({'error': 'Password and Confirm Password do not match'}), 400

    existing_user = users_collection.find_one({'$or': [{'username': username}, {'email': email}]})
    if existing_user:
        return jsonify({'error': 'Username or email already exists'}), 400

    if image and allowed_file(image.filename):
        image_filename = secure_filename(image.filename)
        image.save(os.path.join('uploads', image_filename))
    else:
        return jsonify({'error': 'Invalid image file'}), 400

    hashed_password = generate_password_hash(password, method='sha256')

    new_user = {
        'name': name,
        'contact_details': contact_details,
        'address': address,
        'username': username,
        'email': email,
        'password': hashed_password,
        'image_filename': image_filename
    }

    users_collection.insert_one(new_user)
    print(new_user)

    return jsonify({'message': 'Registration successful'}), 201


@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        uploaded_file = request.files['image']

        if uploaded_file is not None:
            file_path = os.path.join('uploads', uploaded_file.filename)
            uploaded_file.save(file_path)

            with open(file_path, 'rb') as file_data:
                file_id = fs.put(file_data, filename=uploaded_file.filename)

            os.remove(file_path)

            return jsonify({"message": "File uploaded successfully", "file_id": str(file_id)})
        else:
            return jsonify({"error": "No file provided"}), 400

    except Exception as e:
        print(e)
        return jsonify({"error": "An error occurred while uploading the file"}), 500


@app.route('/retrieve/<file_id>', methods=['GET'])
def retrieve_file(file_id):
    try:
        file_id = ObjectId(file_id)
        file_data = fs.get(file_id)

        # Send the file back to the client with appropriate headers
        response = send_file(
            file_data,
            as_attachment=True,  # To force download
            download_name=file_data.filename
        )

        return response
    except Exception as e:
        print(e)
        return jsonify({"error": "An error occurred while retrieving the file"}), 500


if __name__ == '__main__':
    app.run(debug=True)
