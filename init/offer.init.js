let offer = db.getSiblingDB("offer")

offer.createUser(
    {
        user: "offer",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "offer"
            }
        ]
    }
);
