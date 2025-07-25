// svg를 ReactComponent처럼 사용하기 위해 선언
declare module '*.svg' {
  import { HTMLAttributes } from 'react';

  export default React.Component<HTMLAttributes<HTMLDivElement>>;
}
