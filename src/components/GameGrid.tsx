import React, { useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';
import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}

interface GamesApiResponse {
    count: number;
    results: Array<Game>;
}

const GameGrid = () => {
    const [games, setGames] = useState<Array<Game>>([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        apiClient.get<GamesApiResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch(error => setErrorMessage(error.message));
    }, []);

    return (
        <>
            { !!errorMessage && <Text>{ errorMessage }</Text>}
            <ul>
                { games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;
