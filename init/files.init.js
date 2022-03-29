let file = db.getSiblingDB("file")

file.createUser(
    {
        user: "file",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "file"
            }
        ]
    }
);
