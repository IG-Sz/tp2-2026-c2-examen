import { getDb } from "./connection.js";

export async function findAllListings(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const listings = await db.collection("listingsAndReviews")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return listings;
    } else {
        
        const listings = await db.collection("listingsAndReviews").find().toArray();
        return listings;
    }
}

export async function findListingById(id) {
    const db = getDb();
    const listing = await db.collection("listingsAndReviews").findOne({ _id: id });
    console.log(listing);
    return listing;
}

export async function findListingsByType(property_type) {
    const db = getDb();
    const filter = property_type ? { property_types: property_type } : {};
    const listings = await db.collection("listingsAndReviews")
        .find(filter)
        .toArray();
    return listings;
}

export async function findListingsWithPrice(){
    const db = getDb();
    const listings = await db.collection("listingsAndReviews")
        .find()
        .toArray();
    return listings;
}

export async function findListingsByHost(host_id){
    const db = getDb();
    const filter = host_id ? { todos_host_id: host_id } : {};
    const listings = await db.collection("listingsAndReviews")
        .find(filter)
        .toArray();
    return listings;
}