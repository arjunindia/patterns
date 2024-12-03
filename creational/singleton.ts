class Database {
    private static instance: Database;
    private constructor() {
    }
    public static getInstance(): Database {
        if(!Database.instance){
            console.log("creating single instance");
            Database.instance = new Database()
            return Database.instance
        } else {
            console.log("Database already created");
            return Database.instance;
        }
    }
}

function singletonClient(){
    for(let i=0;i<5;i++){
        Database.getInstance();
    }
}

singletonClient()