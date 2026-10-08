import { findAllListings, findListingById, findListingsByType } from "../data/listingsData.js";

export const getListings = async (page, pageSize) => {
    return await findAllListings(page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export const getListingByType = async (property_type) => {
    return await findListingsByType(property_type);
}

