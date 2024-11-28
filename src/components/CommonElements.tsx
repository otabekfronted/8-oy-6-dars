const CommonElements = () => {
    const findCommonElements = <T,>(arr1: T[], arr2: T[]): T[] => {
        return arr1.filter((item) => arr2.includes(item));
    };

    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    const commonNumbers = findCommonElements(numbers1, numbers2);

    const strings1 = ["apple", "banana", "cherry"];
    const strings2 = ["banana", "cherry", "date"];
    const commonStrings = findCommonElements(strings1, strings2);

    console.log("Common Numbers:", commonNumbers);
    console.log("Common Strings:", commonStrings);

    return <div>Common Elements - Check Console</div>;
};

export default CommonElements;
