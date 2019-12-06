URL="http://localhost:3001"

curl \
    -X POST \
    -d '{
        "name": "Thomas",
        "password": "azerty"
    }' \
    -H "Content-type: application/json" \
    --verbose \
    $URL/register

URL="http://localhost:3001"
echo ""

echo ""
echo "### Need 400"
curl \
    -X POST \
    -d '{
        "name": "Thomas"
    }' \
    -H "Content-type: application/json" \
    --verbose \
    $URL/register
