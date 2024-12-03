abstract class Furniture {
    public abstract assemble(): void;
}

class Chair extends Furniture {
    public assemble(): void {
        console.log("Assembling chair");
    }
}

class Table extends Furniture {
    public assemble(): void {
        console.log("Assembling table");
    }
}

abstract class FurnitureFactory {
    public abstract createFurniture(type: "chair" | "table" | string): Furniture;
}

class ConcreteFurnitureFactory extends FurnitureFactory {
    public createFurniture(type: "chair" | "table" | string): Furniture {
        if (type === "chair") {
            return new Chair();
        }
        if (type === "table") {
            return new Table();
        }
        throw new Error("Invalid furniture type");
    }
}

function factoryClient() {
    const furnitureFactory = new ConcreteFurnitureFactory();
    const chair = furnitureFactory.createFurniture("chair");
    const table = furnitureFactory.createFurniture("table");
    chair.assemble();
    table.assemble();
}

factoryClient();