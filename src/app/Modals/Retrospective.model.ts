export class RetrospectiveModel {
    text: string;
    type: RetroType;
    voteUp: number;
    voteDown: number;
    editable: boolean;
    CreatedBy: number;
}

export enum RetroType {
    well,
    wrong,
    action
}
