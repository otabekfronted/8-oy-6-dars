interface WrappedData<T> {
    status: string;
    data: T;
}

const wrapData = <T,>(data: T): WrappedData<T> => {
    return {
        status: "success",
        data,
    };
};

const GenericWrapper = () => {
    const wrappedString = wrapData("Hello, world!");
    const wrappedNumber = wrapData(42);

    console.log("Wrapped String:", wrappedString);
    console.log("Wrapped Number:", wrappedNumber);

    return <div>Generic Wrapper - Check Console</div>;
};

export default GenericWrapper;
