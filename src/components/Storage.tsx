class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter((i) => i !== item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const StorageDemo = () => {
    const stringStorage = new Storage<string>();
    stringStorage.addItem("apple");
    stringStorage.addItem("banana");
    stringStorage.removeItem("apple");
    console.log("String Storage:", stringStorage.getItems());

    const numberStorage = new Storage<number>();
    numberStorage.addItem(42);
    numberStorage.addItem(7);
    numberStorage.removeItem(7);
    console.log("Number Storage:", numberStorage.getItems());

    return <div>Storage Demo - Check Console</div>;
};

export default StorageDemo;
