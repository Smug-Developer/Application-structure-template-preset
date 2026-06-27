(
//simple server to server type communication requires atleast 2 running servers
interface ServerAccessPoint = {
    Url: URL,
    Port: String,
    Identification: Identification,
    AllowConnections: Boolean,
}

class Identification{
    string: String;
    constructor(string?: String){
        this.string = new String(string);
    };
}

class User{
    protected Identification:Identification = new Identification();
    constructor(){};
    
}

class Storage {
    EntitiesList: <EntityType, Array<{Identifier: Identification, Entity: Entity}>>;
    UserList:
    constructor(){};
}

function GetUnusedUserID(){
    return Number;
}

function OnUserConnected(){
    return new User();
}

function ConnectedUserGetServerData(){
    
}

function ConnectedUserRequestEntityDataChange(){

}

function UpdateUsersOnDataChange(){

}

function ForwardMessage(message: String):Boolean{
    return true;
}

function VerifyServerIdentificationBeforeForwardingMessage(){

}

function SearchForAccessPoints(){

}

function BroadcastAccessPoints(){

}

function AttemptEstablishingConnectionToAccessPoints(){
    
}
)();