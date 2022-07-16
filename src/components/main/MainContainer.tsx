import { FC, ReactElement, ReactNode } from 'react';

type MainPropsType = {
  children: ReactNode;
};

const MainContainer: FC<MainPropsType> = ({ children }): ReactElement => (
  <main>{children}</main>
);

export default MainContainer;

MainContainer.displayName = 'MainContainer';
