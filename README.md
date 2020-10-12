# productServer

Instructions:
- Install dependencies with `npm install`
- Fill in database details in config/config.json
- Start with `npm start`
- POST new products to `/products` with a product name and, optionally, attributes
```
{
    "productName": "milkshake",
    "attributes": [
        {
            "type":"size",
            "value":"large"
        },
                {
            "type":"flavor",
            "value":"strawberry"
        }
    ]
}
```
- GET existing products from '/products'
