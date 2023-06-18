import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationSection = styled.div`
  display: flex;

  background-color: var(--custom-black);
  color: var(--color-font-light);

  /* position: -webkit-sticky;
  position: sticky;
  top: 0; */

  min-height: 100px;
  width: 100%;
  font-size: 20px;
  padding: 1em;
`;

export const InformationWrapper = styled.div<{
  width: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.width < 1026 ? "column" : "row")};

  width: inherit;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-self: center;

  height: 100px;
  width: 100px;
  background-color: gray;
  margin-bottom: 1em;

  border: 5px solid var(--custom-yellow);
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90%;

  margin-left: 1em;
  margin-top: -8px;
`;

export const RowInformation = styled.div<{ width: number }>`
  display: flex;
  align-items: ${(props) => (props.width < 750 ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.width < 750 ? "column" : "row")};

  background-color: var(--custom-soft-black);
  margin-top: 8px;
  padding: 5px;

  & > .label-custom {
    width: ${(props) => (props.width < 750 ? "100%" : "15%")};
  }

  & > .content-custom {
    width: ${(props) => (props.width < 750 ? "100%" : "70%")};
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  overflow-wrap: break-word;
`;

export const ContentWrapper = styled.div`
  overflow-wrap: break-word;

  & > a {
    text-decoration: none;
    color: var(--color-font-light);
  }
`;

export const SocialNetworkWrapper = styled.div`
  margin-left: -10px;
  & > span {
    margin-left: 10px;
  }
`;
