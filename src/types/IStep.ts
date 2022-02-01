export default interface IStep {
  label: string;
  id?: number;
  completed: boolean;
  errorMessage: string;
}
