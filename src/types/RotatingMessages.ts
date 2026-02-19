export default interface RotatingMessages {
  range: {
    minSeconds: number;
    maxSeconds: number;
    label: string;
  };
  messages: string[];
}
