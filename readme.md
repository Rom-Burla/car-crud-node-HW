model:
manufacturer,
model,
year,
color,
price,
timeFromZeroToHundred,
maxSpeed,
description,
inventory

CRUD endpoints
init endpoint
buy endpoint: {
structure: cars/{car.\_id}/buy
if inventory = 0 ===true?error 409
}
