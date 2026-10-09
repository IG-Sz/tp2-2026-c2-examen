import { findAllListings, findListingById, findListingsByType, findListingsWithPrice, findListingsByHost } from "../data/listingsData.js";

export const getListings = async (page, pageSize) => {
    return await findAllListings(page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export const getListingsByType = async (property_type) => {
    return await findListingsByType(property_type);
}

export const getListingsWithPrice = async () => {
    return await findListingsWithPrice();
}

export const getListingsByHost = async (host_id) => {
    return await findListingsByHost(host_id);
}