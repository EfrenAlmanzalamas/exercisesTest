export class Gigasecond {
    constructor(private startDate: Date) {}

    public date(): Date {

        const unixTimestamp = this.startDate.getTime() / 1000;


        const updatedTimestamp = unixTimestamp + 1000000000;


        const endDate = new Date(updatedTimestamp * 1000);

        return endDate;
    }
}