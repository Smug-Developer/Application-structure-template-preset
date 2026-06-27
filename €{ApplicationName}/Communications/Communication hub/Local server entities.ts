(
//simple server for handling Entity position and rotations (ground, items, users, etc)
interface ServerAccessPoints = {
    Url: URL,
    Port: String,
    Identification: Identification,
    AllowConnections: Boolean,
}

enum EntityType {
    Undefined,  //default
    Cube,       //represents ground
    Pyramid,    //represents item
    Sphere,     //represents user
    None,
};

interface Point {
    Position: Position;
    Rotation: Rotation;
};

type Position = {
    x:number;
    y:number;
    z:number;
};

type Rotation = {
    x:number;
    y:number;
    z:number;
};

interface Entity {
    Type: EntityType;
    Identification: Identification;
    Position: Position;
    Rotation: Rotation;
    Enabled: Boolean;
}

class Identification{
    string: String;
    constructor(string?: String){
        this.string = new String(string);
    };
}

class Point{
    Position: Position;
    Rotation: Rotation;
    constructor(Position?: Position = {x:0,y:0,z:0}, Rotation?: Rotation = {x:0,y:0,z:0}){
        this.Position = Position;
        this.Rotation = Rotation;
    };
}

class Entity {
    Type: EntityType;
    Identification: Identification = new Identification();
    Point: Point = new Point();
    Enabled: Boolean = false;
    constructor(Type: EntityType){
        this.Type = Type;
    };
}

class User{
    protected Identification:Identification = new Identification();
    protected Entity:Entity = new Entity(EntityType.Sphere);
    constructor(){};
    
}

class Storage {
    EntitiesList: <EntityType, Array<{Identifier: Identification, Entity: Entity}>>;
    UserList:
    constructor(){};
}

function CreateEntity(Type: EntityType, Identification: String, Position?: Position, Rotation?: Rotation, Enabled: Boolean){
    return {Type, Identification, Position, Rotation, Enabled};
}

function GetUnusedUserID(){
    return Number;
}

function GetEntityData(EntityType: EntityType, Identification: Identification){
    return EntityType;
}

function OnUserConnected(){
    return new User();
}

function ConnectedUserGetServerData(){
    return GetEntityData(EntityType.Sphere, Identification);
}

function ConnectedUserRequestEntityDataChange(){

}

function UpdateUsersOnDataChange(){

}
)();