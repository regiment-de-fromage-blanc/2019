URL="http://localhost:3001"

echo "### /register with correct data"
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
echo "### /register with wrong data"
echo "### Need 400"
curl \
    -X POST \
    -d '{
        "name": "Thomas"
    }' \
    -H "Content-type: application/json" \
    --verbose \
    $URL/register
echo ""

echo ""
echo "### /login with correct data"
curl \
    -X POST \
    -d '{
        "name": "Thomas",
        "password": "azerty"
    }' \
    -H "Content-type: application/json" \
    --verbose \
    $URL/login
echo ""

echo ""
echo "### /login with wrong data"
curl \
    -X POST \
    -d '{
        "name": "Thomas",
        "password": "thisisnotmypassword"
    }' \
    -H "Content-type: application/json" \
    --verbose \
    $URL/login
echo ""
