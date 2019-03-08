export interface ITeam{

    id:string,
    name:string,
    fullName: string,
    nickName: number,
    abbr:string,
    roster:{
        person:{
           displayName:string,
        }
    unit:string,
    positionAbbr:string,
    position:string,
    depthOrder:number

    }
}