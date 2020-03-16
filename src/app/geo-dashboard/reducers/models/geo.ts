export interface IGeo {
    name: string,
    address_components: [
        {
            long_name: string,
        }
    ],
    geometry: {
        location: {
            lng: number,
            lat: number
        }
    }
}


