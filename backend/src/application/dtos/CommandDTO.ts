export interface CommandDTO {
    id?: number;
    name: string;
    type: "PERSON" | "GROUP";
    status: "OPEN" | "CLOSED";
}
