export class Account{

    id: number;
    name: string;
    isEngage: boolean;
    isExpired: boolean;
    areWidgetsActivated: boolean;
    group: {
        id: string;
        name: string;
        numberOfAccounts: number;
        groupAdmins: string[];
    }

}
