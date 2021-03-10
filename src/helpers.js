export const UpdateStringForPath = (str) => {
    return (
        str.toLowerCase().replace(/ /g, '-')
    );
};