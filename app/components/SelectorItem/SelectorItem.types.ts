export interface IDoFilter {
  doFilter: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => void;
  name: string;
}
