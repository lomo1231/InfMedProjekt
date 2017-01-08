import {deserialize} from "cerialize";
export class Heartbeat {
  @deserialize public value: number;
}
