#!/bin/bash

API="http://localhost:4741"
URL_PATH="/units"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
