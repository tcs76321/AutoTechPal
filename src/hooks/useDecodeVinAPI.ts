import { useState } from 'react';

type ApiResponse = {
    Results: Array<{
        Variable: string;
        Value: string;
    }>;
};

type VehicleInfoType = {
    year: string;
    make: string;
    model: string;
};

type ErrorType = {
    message: string;
};

const useDecodeVinAPI = () => {
    const [vehicleInfo, setVehicleInfo] = useState<VehicleInfoType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType | null>(null);

    const fetchVehicleInfo = async (vin: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
            const data: ApiResponse = await response.json();
            if (data.Results && data.Results.length > 0) {
                const relevantData = {
                    year: 'UNKNOWN',
                    make: 'UNKNOWN',
                    model: 'UNKNOWN',
                };

                data.Results.forEach(item => {
                    if (item.Variable === 'Make') {
                        relevantData.make = item.Value;
                    } else if (item.Variable === 'Model') {
                        relevantData.model = item.Value;
                    } else if (item.Variable === 'Model Year') {
                        relevantData.year = item.Value;
                    }
                });

                setVehicleInfo(relevantData);
            }
        } catch (error) {
            setError({ message: (error as Error).message });
        } finally {
            setIsLoading(false);
        }
    };

    return { vehicleInfo, isLoading, error, fetchVehicleInfo };
};

export default useDecodeVinAPI;
