//utilizar clase en otros archivos con palabra export
import powers from "../data/power";
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  public getPower(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not Found"
    );
  }
}

export const miname = "Robert";
