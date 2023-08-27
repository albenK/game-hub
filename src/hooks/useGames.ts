import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game {
    id: number;
    name: string;
}

interface GamesApiResponse {
    count: number;
    results: Array<Game>;
}

const useGames = () => {
    const [games, setGames] = useState<Array<Game>>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<GamesApiResponse>('/games', { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch(error => {
                if (error instanceof CanceledError) {
                    return;
                }
                setErrorMessage(error.message);
            });
        
        return () => controller.abort();
    }, []);

    return { games, errorMessage };
};

export default useGames;