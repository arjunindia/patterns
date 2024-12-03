abstract class Chair {
    public abstract sit(): void;
}

abstract class Table {
    public abstract eat(): void;
}

class ModernChair extends Chair {
    public sit(): void {
        console.log("Sitting on modern chair");
    }
}

class ModernTable extends Table {
    public eat(): void {
        console.log("Eating on modern table");
    }
}

class VictorianChair extends Chair {
    public sit(): void {
        console.log("Sitting on Victorian chair");
    }
}

class VictorianTable extends Table {
    public eat(): void {
        console.log("Eating on Victorian table");
    }
}

abstract class FurnitureFactory {
    public abstract createChair(): Chair;
    public abstract createTable(): Table;
}

class ModernFurnitureFactory extends FurnitureFactory {
    public createChair(): Chair {
        return new ModernChair();
    }
    public createTable(): Table {
        return new ModernTable();
    }
}

class VictorianFurnitureFactory extends FurnitureFactory {
    public createChair(): Chair {
        return new VictorianChair();
    }
    public createTable(): Table {
        return new VictorianTable();
    }
}

function furnitureClient(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const table = factory.createTable();
    chair.sit();
    table.eat();
}

// create modern furniture
furnitureClient(new ModernFurnitureFactory());

// create Victorian furniture
furnitureClient(new VictorianFurnitureFactory());