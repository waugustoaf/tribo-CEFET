export interface IExerciseProps {
  id: string;
  type: 'gain' | 'loss';
  name: string;
  description: string;
  duration: string;
  repetitions: number;
}
