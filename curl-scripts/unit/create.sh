#!/bin/bash

API="http://localhost:4741"
URL_PATH="/units"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "unit": {
      "name": "'"${NAME}"'",
      "element": "'"${ELEMENT}"'",
      "rarity": "'"${RARITY}"'",
      "region": "'"${REGION}"'"
    }
  }'

echo
