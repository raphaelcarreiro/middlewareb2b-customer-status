export class Audit {
  id:             number;
  type:           string;
  distributor_id: number;
  input:          string;
  output:         string;
  output_at:      Date;
  created_at:     Date;
}