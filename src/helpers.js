export const UpdateStringForPath = (str) => {
    return (
        str.toLowerCase().replace(/ /g, '-')
    );
};

export const getISObyPath = () => {
    const countriesISO = {
        'australia': 'AUS',
        'brazil': 'BRA',
        'germany': 'DEU',
        'canada': 'CAN',
        'morocco': 'MAR',
        'the-netherlands': 'NLD',
        'france': 'FRA',
        'japan': 'JAP'
    };

    const pathName = document.location.pathname.slice(1);

    return countriesISO[pathName]
}