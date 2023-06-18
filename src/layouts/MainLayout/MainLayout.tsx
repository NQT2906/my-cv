import { PropsWithChildren } from "react";
import { MainLayoutContainer, MainLayoutWrapper } from "./MainLayoutStyled";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <MainLayoutWrapper>
      <MainLayoutContainer>{props?.children}</MainLayoutContainer>
    </MainLayoutWrapper>
  );
}
