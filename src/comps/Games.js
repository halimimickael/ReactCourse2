import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Games() {
    const [query] = useSearchParams();
    const [games_ar, setGamesAr] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        doApi();
    }, [query]);

    const doApi = async () => {
        const url = "http://fs1.co.il/bus/xbox1.php";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            const year = parseInt(query.get('search'));
            const games_filter_ar = data.filter(item => {
                return parseInt(item.Year) === year;
            });
            if (games_filter_ar.length === 0) {
                setError(`No games found for the year ${year}`);
            } else {
                setGamesAr(games_filter_ar);
                setError(null);
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred while retrieving data.');
        }
    };
    
    const redirectToGameLink = (gameLink) => {
        window.open(gameLink, '_blank');
    };

    return (
        <div className='container'>
            <h2>Games: {query.get('search')}</h2>
            {error ? <p>{error}</p> :
                <ul>
                        {games_ar.map(item => (
                            <li key={item.Game} onClick={() => redirectToGameLink(item.GameLink)} style={{ cursor: 'pointer' }} >
                                {item.Game}
                                <hr/>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    );
}
