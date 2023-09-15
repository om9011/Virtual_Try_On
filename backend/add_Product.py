import pymongo

mongo_uri = "mongodb://localhost:27017/"  # Replace with your MongoDB URI
db_name = "Try_On"  # Replace with your database "name"
collection_name = "products"

products = [
    {
        "id": 7,
        "name": "Casual Jeans",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/casualjeans.png?v=1676365281&w\"id\"th=1000",
        "imageAlt": "Front view of men's Casual Jeans in light blue.",
        "price": "1499",
        "color": "Light Blue"
    }, {
        "id": 8,
        "name": "Sporty Jacket",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/sportyjacket.png?v=1676365282&w\"id\"th=1000",
        "imageAlt": "Front view of men's Sporty Jacket in red and black.",
        "price": "1799",
        "color": "Red/Black"
    },
    {
        "id": 9,
        "name": "Slim Fit Chinos",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/slimfitchinos.png?v=1676365283&w\"id\"th=1000",
        "imageAlt": "Front view of men's Slim Fit Chinos in khaki.",
        "price": "1399",
        "color": "Khaki"
    }
    , {
        "id": 10,
        "name": "Vintage Leather Jacket",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/vintageleatherjacket.png?v=1676365284&w\"id\"th=1000",
        "imageAlt": "Front view of men's Vintage Leather Jacket in brown.",
        "price": "1999",
        "color": "Brown"
    }
    , {
        "id": 11,
        "name": "Graphic T-Shirt",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/graphictshirt.png?v=1676365285&w\"id\"th=1000",
        "imageAlt": "Front of men's Graphic T-Shirt in white with a cool design.",
        "price": "1099",
        "color": "White"
    }
    , {
        "id": 12,
        "name": "Formal Dress Shirt",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/formaldressshirt.png?v=1676365286&w\"id\"th=1000",
        "imageAlt": "Front of men's Formal Dress Shirt in light gray.",
        "price": "1599",
        "color": "Light Gray"
    }
    , {
        "id": 13,
        "name": "Cargo Shorts",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/cargoshorts.png?v=1676365287&w\"id\"th=1000",
        "imageAlt": "Front view of men's Cargo Shorts in olive green.",
        "price": "1199",
        "color": "Olive Green"
    }
    , {
        "id": 14,
        "name": "Hooded Sweatshirt",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/hoodedsweatshirt.png?v=1676365288&w\"id\"th=1000",
        "imageAlt": "Front of men's Hooded Sweatshirt in dark gray.",
        "price": "1299",
        "color": "Dark Gray"
    }
    , {
        "id": 15,
        "name": "Casual Jeans",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/casualjeans.png?v=1676365281&w\"id\"th=1000",
        "imageAlt": "Front view of men's Casual Jeans in light blue.",
        "price": "1499",
        "color": "Light Blue"
    }
    , {
        "id": 16,
        "name": "Sporty Jacket",
        "href": "#",
        "imageSrc": "https://animedevta.com/cdn/shop/products/sportyjacket.png?v=1676365282&w\"id\"th=1000",
        "imageAlt": "Front view of men's Sporty Jacket in red and black.",
        "price": "1799",
        "color": "Red/Black"
    }
    , {
        "id": 17,
        "name": "Striped Polo Shirt",
        "href": "#",
        "imageSrc": "https://example.com/images/striped-polo-shirt.png",
        "imageAlt": "Front view of men's Striped Polo Shirt in navy blue and white.",
        "price": "1299",
        "color": "Navy Blue/White"
    }
    , {
        "id": 18,
        "name": "Slim Fit Trousers",
        "href": "#",
        "imageSrc": "https://example.com/images/slim-fit-trousers.png",
        "imageAlt": "Front view of men's Slim Fit Trousers in charcoal gray.",
        "price": "1399",
        "color": "Charcoal Gray"
    }
    , {
        "id": 19,
        "name": "Denim Jacket",
        "href": "#",
        "imageSrc": "https://example.com/images/denim-jacket.png",
        "imageAlt": "Front view of men's Denim Jacket in indigo blue.",
        "price": "1599",
        "color": "Indigo Blue"
    }
    , {
        "id": 20,
        "name": "Casual Sneakers",
        "href": "#",
        "imageSrc": "https://example.com/images/casual-sneakers.png",
        "imageAlt": "Front view of men's Casual Sneakers in white.",
        "price": "999",
        "color": "White"
    }
    , {
        "id": 21,
        "name": "Cargo Pants",
        "href": "#",
        "imageSrc": "https://example.com/images/cargo-pants.png",
        "imageAlt": "Front view of men's Cargo Pants in olive green.",
        "price": "1199",
        "color": "Olive Green"
    }
    , {
        "id": 22,
        "name": "Hooded Parka",
        "href": "#",
        "imageSrc": "https://example.com/images/hooded-parka.png",
        "imageAlt": "Front view of men's Hooded Parka in black.",
        "price": "1799",
        "color": "Black"
    }
    , {
        "id": 23,
        "name": "V-Neck Sweater",
        "href": "#",
        "imageSrc": "https://example.com/images/v-neck-sweater.png",
        "imageAlt": "Front view of men's V-Neck Sweater in gray.",
        "price": "1299",
        "color": "Gray"
    }
    , {
        "id": 24,
        "name": "Canvas Backpack",
        "href": "#",
        "imageSrc": "https://example.com/images/canvas-backpack.png",
        "imageAlt": "Front view of a Canvas Backpack in brown.",
        "price": "599",
        "color": "Brown"
    }
    , {
        "id": 25,
        "name": "Printed Dress Shirt",
        "href": "#",
        "imageSrc": "https://example.com/images/printed-dress-shirt.png",
        "imageAlt": "Front view of men's Printed Dress Shirt in blue and white.",
        "price": "1599",
        "color": "Blue/White"
    }

]

# Define the MongoDB schema
product_schema = {
    "id": int,
    "name": str,
    "href": str,
    "imageSrc": str,
    "imageAlt": str,
    "price": str,
    "color": str,
}


def main():
    # Connect to MongoDB
    client = pymongo.MongoClient(mongo_uri)
    db = client[db_name]
    collection = db[collection_name]

    # Create a unique index on the "id" field to prevent duplicates
    collection.create_index([("id", pymongo.ASCENDING)], unique=True)

    # Insert products into the collection
    for product in products:
        try:
            # Ensure that the data matches the schema
            validated_product = {key: product[key] for key in product_schema.keys()}
            collection.insert_one(validated_product)
            print(f"Inserted product with id {product['id']}")
        except pymongo.errors.DuplicateKeyError:
            print(f"Product with id {product['id']} already exists and won't be inserted.")

    # Close the MongoDB connection
    client.close()


if __name__ == "__main__":
    main()
